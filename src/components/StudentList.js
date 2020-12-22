import React, { Component } from 'react';
import Student from './Student'

export default class StudentList extends Component {
  render() {
    var stus = this.props.stuObj.map(ele=>{
      return <Student {...ele} key={ele.id} />
    });
    return (
      <div>
        {stus}
      </div>
    )
  }
}