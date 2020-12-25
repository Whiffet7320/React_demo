import React, { Component } from 'react';
import ipropTypes from 'prop-types';
import './index.css';

// 左右按钮
export default class SwitchBtn extends Component {
  static propTypes={
    onSwitch:ipropTypes.func
  }
  my_onClick = type => {
    this.props.onSwitch && this.props.onSwitch(type)
  }
  render() {
    return (
      <div className="switchBtn">
        <span className="right" onClick={() => {
          this.my_onClick('right')
        }}>
          {'>'}
        </span>
        <span className="left" onClick={() => {
          this.my_onClick('left')
        }}>
          {'<'}
        </span>
      </div>
    )
  }
}
