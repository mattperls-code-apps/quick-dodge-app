import React from "react"

import { Circle } from "react-native-svg"

import screen from "./screen"

class Player {
    constructor(){
        this.x = 0.5 * screen.width
        this.y = screen.safeGameHeight
        this.radius = 0.075 * screen.width
        this.Render = this.Render.bind(this)
    }
    Render(){
        return (
            <Circle cx={this.x} cy={this.y} r={this.radius} fill={"rgb(225, 225, 225)"} />
        )
    }
}

export default Player