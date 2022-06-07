import React from "react"

import Svg, { Rect } from "react-native-svg"

import Player from "./player"
import Obstacle from "./obstacle"
import circleLineCollision from "./circleLineCollision"
import screen from "./screen"

import arrayShuffle from "array-shuffle"

class Game {
    constructor(){
        this.player = new Player()
        this.obstacles = []
        this.movement = []
        this.bonusPointMessage = false
        this.difficulty = 0
        this.createObstacleScore = 0
        this.score = 0
        this.isFirstGame = true
        this.state = "outOfGame"
        this.timeStamp = performance.now()
        this.hue = Math.random() * 360
        this.adjustedDifficulty = this.adjustedDifficulty.bind(this)
        this.addMovement = this.addMovement.bind(this)
        this.averageAbsoluteMovement = this.averageAbsoluteMovement.bind(this)
        this.update = this.update.bind(this)
        this.Render = this.Render.bind(this)
        this.restart = this.restart.bind(this)
        this.togglePlayState = this.togglePlayState.bind(this)
    }
    adjustedDifficulty(){
        return (0.25 * this.difficulty + 1) / (0.1 * this.difficulty + 1)
    }
    addMovement(dx){
        this.movement.push(dx)
        if(this.movement.length > 20){
            this.movement.shift()
        }
    }
    averageAbsoluteMovement(){
        let sum = 0
        this.movement.forEach(movement => {
            sum += movement
        })
        return sum / this.movement.length
    }
    update(){
        const now = performance.now()
        const dt = (now - this.timeStamp) / 1000
        this.timeStamp = now
        if(this.state == "inGamePlaying"){
            this.hue += 3 * dt
            this.hue = this.hue % 360
            this.difficulty += 0.05 * dt
            this.createObstacleScore += 0.5 * dt * this.adjustedDifficulty()
            for(let i = 0;i<this.obstacles.length;i++){
                this.obstacles[i].update(dt)
                if(this.obstacles[i].outOfScreen){
                    this.difficulty += 0.1
                    this.createObstacleScore += 0.45 * this.adjustedDifficulty()
                    this.score++
                    this.obstacles.splice(i, 1)
                    i--;
                }
            }
            while(this.createObstacleScore > 1){
                this.obstacles.push(new Obstacle(this.hue, this.adjustedDifficulty()));
                this.createObstacleScore--
            }
            this.addMovement(0)
            let closestDodge = { index: -1, distanceSquared: Infinity }
            let died = false
            this.obstacles.forEach((obstacle, index) => {
                const vertices = obstacle.generateVertices()
                const playerPosition = { x: this.player.x, y: this.player.y }
                let currentCollision = circleLineCollision(vertices[0], vertices[vertices.length - 1], playerPosition, this.player.radius)
                if(currentCollision.collision){
                    died = true
                } else if(!obstacle.hasBeenBonusDodged && currentCollision.distanceSquared < closestDodge.distanceSquared){
                    closestDodge = { index, distanceSquared: currentCollision.distanceSquared }
                }
                for(let i = 1;i<vertices.length;i++){
                    currentCollision = circleLineCollision(vertices[i - 1], vertices[i], playerPosition, this.player.radius)
                    if(currentCollision.collision){
                        died = true
                    } else if(!obstacle.hasBeenBonusDodged && currentCollision.distanceSquared < closestDodge.distanceSquared){
                        closestDodge = { index, distanceSquared: currentCollision.distanceSquared }
                    }
                }
            })
            if(closestDodge.index != -1 && this.obstacles[closestDodge.index].y > this.player.y){
                if(this.averageAbsoluteMovement() > 0.15 * screen.width){
                    if(closestDodge.distanceSquared < (0.05 * screen.width) ** 2){
                        this.bonusPointMessage = {
                            text: arrayShuffle(["Great Dodge! +20", "Amazing! +20", "Incredible! +20"])[0],
                            time: 1
                        }
                        this.score += 20
                    } else if(closestDodge.distanceSquared < (0.08 * screen.width) ** 2){
                        this.bonusPointMessage = {
                            text: arrayShuffle(["Awesome Move! +10", "Good Reflexes! +10", "Great Job! +10"])[0],
                            time: 1
                        }
                        this.score += 10
                    } else if(closestDodge.distanceSquared < (0.12 * screen.width) ** 2){
                        this.bonusPointMessage = {
                            text: arrayShuffle(["Nice One! +5", "Good Move! +5", "Great! +5"])[0],
                            time: 1
                        }
                        this.score += 5
                    }
                    if(closestDodge.distanceSquared < (0.12 * screen.width) ** 2){
                        this.obstacles[closestDodge.index].hasBeenBonusDodged = true
                    }
                } else {
                    if(closestDodge.distanceSquared < (0.05 * screen.width) ** 2){
                        this.bonusPointMessage = {
                            text: arrayShuffle(["Close Call! +10", "Wow! +10", "Great Job! +10"])[0],
                            time: 1
                        }
                        this.score += 10
                    } else if(closestDodge.distanceSquared < (0.1 * screen.width) ** 2){
                        this.bonusPointMessage = {
                            text: arrayShuffle(["Lucky! +5", "Watch Out! +5", "Nice! +5"])[0],
                            time: 1
                        }
                        this.score += 5
                    }
                    if(closestDodge.distanceSquared < (0.1 * screen.width) ** 2){
                        this.obstacles[closestDodge.index].hasBeenBonusDodged = true
                    }
                }
            }
            if(this.bonusPointMessage != false){
                this.bonusPointMessage.time -= dt
            }
            if(this.bonusPointMessage.time <= 0){
                this.bonusPointMessage = false
            }
            if(died){
                this.obstacles = []
                this.state = "outOfGame"
            }
        } else if(this.state == "outOfGame"){
            this.hue += 15 * dt
            for(let i = 0;i<this.obstacles.length;i++){
                this.obstacles[i].update(dt)
                if(this.obstacles[i].outOfScreen){
                    this.obstacles.splice(i, 1)
                    i--;
                }
            }
            if(Math.random() < 0.2){
                this.obstacles.push(new Obstacle(this.hue, 1.5))
            }
        }
    }
    Render(){
        const obstacleRenders = []
        this.obstacles.forEach((obstacle, index) => {
            obstacleRenders.push(<obstacle.Render key={index} />)
        })
        return (
            <Svg x={0} y={0} width={screen.width} height={screen.height} viewBox={`0 0 ${screen.width} ${screen.height}`}>
                <Rect x={0} y={0} width={screen.width} height={screen.height} fill={`hsl(${this.hue}, 100%, 10%)`} />
                {
                    obstacleRenders
                }
                {
                    this.state != "outOfGame" && <this.player.Render />
                }
            </Svg>
        )
    }
    restart(){
        this.player = new Player()
        this.obstacles = []
        this.movement = []
        this.bonusPointMessage = false
        this.difficulty = 0
        this.createObstacleScore = 0
        this.score = 0
        this.isFirstGame = false
        this.state = "inGamePlaying"
    }
    togglePlayState(){
        this.state = (this.state == "inGamePlaying") ? "inGamePaused" : "inGamePlaying"
    }
}

export default Game