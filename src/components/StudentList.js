import React, { Component } from 'react';
import Student from './Student'

export default class StudentList extends Component {
  render() {
    console.log(this.props.stuObj)
    let my_student = [];
    this.props.stuObj.forEach(ele=>{
      my_student.push(<Student {...ele} key={ele.id}/>)
    })
    return (
      <div>
        {my_student}
      </div>
    )
  }
}
