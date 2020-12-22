import React, { Component } from 'react'

export default class Student extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <span>姓名：{this.props.name}</span>
        <span>性别：{this.props.sex == 1 ? '男':'女'}</span>
      </div>
    )
  }
}
