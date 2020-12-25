import React, { Component } from 'react'
import ipropTypes from 'prop-types';
import './index.css'
export default class DotBtn extends Component {
  static propTypes = {
    onDot: ipropTypes.func,
    total: ipropTypes.number.isRequired,
    activeIndex: ipropTypes.number.isRequired
  }
  onClick=index=>{
    this.props.onDot && this.props.onDot(index)
  }
  render() {
    let spans = []
    for (let i = 0; i < this.props.total; i++) {
      spans.push(<span onClick={()=>{
        this.onClick(i)
      }} key={i} className={this.props.activeIndex === i ? 'active' : ''}></span>)
    }
    return (
      <div className='dotBtn'>
        {spans}
      </div>
    )
  }
}
