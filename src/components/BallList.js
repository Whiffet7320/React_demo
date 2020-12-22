import React, { Component } from 'react';
import Ball from './Ball'

function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
export default class BallList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balls: [],
    }
    const timer = setInterval(() => { //随机生成小球
      let newBallState = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
        background: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
      }
      this.setState({
        balls: [...this.state.balls, newBallState]
      })
      if (this.state.balls.length == 5) {
        clearInterval(timer)
      }
    }, 1000)

  }
  render() {
    let newBallList = this.state.balls.map((ele, index) => {
      return <Ball key={index} {...ele} />
    })
    return (
      <div>
        {newBallList}
      </div>
    )
  }
}
