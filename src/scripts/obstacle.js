import React from "react"

import { Path } from "react-native-svg"

import screen from "./screen"

class Obstacle {
    constructor(hue, difficultyMultiplier){
        this.radius = (0.035 + Math.random() * 0.1) * screen.width
        this.x = this.radius + Math.random() * (screen.width - 2 * this.radius)
        this.y = -this.radius
        this.angle = Math.PI * Math.random() * 2
        this.sides = 3 + Math.floor(Math.random() * 4)
        this.speed = (0.325 + Math.random() * 0.2) * screen.safeGameHeight * difficultyMultiplier
        this.angularSpeed = (Math.random() - 0.5) * 1.25 * difficultyMultiplier
        this.hue = hue
        this.outOfScreen = false
        this.hasBeenBonusDodged = false
        this.generateVertices = this.generateVertices.bind(this)
        this.update = this.update.bind(this)
        this.Render = this.Render.bind(this)
    }
    generateVertices(){
        const vertices = []
        for(let i = 0;i<this.sides;i++){
            vertices.push({
                x: this.x + Math.cos(this.angle + Math.PI * 2 * i / this.sides) * this.radius,
                y: this.y + Math.sin(this.angle + Math.PI * 2 * i / this.sides) * this.radius
            })
        }
        return vertices
    }
    update(dt){
        this.y += this.speed * dt
        this.angle += this.angularSpeed * dt
        if(this.y - this.radius > screen.height){
            this.outOfScreen = true
        }
    }
    Render(){
        const vertices = this.generateVertices()
        let pathCommand = `M ${vertices[vertices.length - 1].x}  ${vertices[vertices.length - 1].y} `
        for(let i = 0;i<vertices.length;i++){
            pathCommand += `L ${vertices[i].x} ${vertices[i].y}`
        }

        return (
            <Path d={pathCommand} stroke={`hsl(${this.hue}, 100%, 70%)`} strokeWidth={150 / this.radius} strokeLinejoin={"round"} strokeLinecap={"round"}></Path>
        )
    }
}

export default Obstacle