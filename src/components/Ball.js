import React, { Component } from 'react';
import './Ball.css'

export default class Ball extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: props.left || 0, //横坐标
      top: props.top || 0, //纵坐标
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
      background: props.background || '#f40'
    }
    setInterval(() => {
      const xDis = this.state.xSpeed * 16 / 1000;
      const yDis = this.state.ySpeed * 16 / 1000;
      let newTop = this.state.top + yDis;
      let newLeft = this.state.left + xDis;

      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed
        })
      }
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed
        })
      }
      this.setState({
        left: newLeft,
        top: newTop
      })
    }, 16)
  }
  render() {
    return (
      <div className='ball' style={{
        left: this.state.left,
        top: this.state.top,
        background: this.state.background
      }}>

      </div>
    )
  }
}
