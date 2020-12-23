import React from 'react';
import './index.css'

export default function index(props) {
  const defaultprops = {
    minWidth: 800,
    leftWidth: 100,
    rightWidth: 100,
    gap:0,//间隔
  }
  const my_props = Object.assign({}, defaultprops, props)
  return (
    <div className="ThreeLayout" style={{ width: my_props.minWidth}}>
      <div className="ThreeLayout_main">
        {props.children}
      </div>
      <div className="ThreeLayout_left" style={{ width: my_props.leftWidth,marginRight:my_props.gap }}>
        {props.left}
      </div>
      <div className="ThreeLayout_right" style={{ width: my_props.rightWidth,marginLeft:my_props.gap }}>
        {props.right}
      </div>
    </div>
  )
}
