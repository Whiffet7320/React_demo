import React from 'react';
import './index.css'

export default function index(props) {
  const defaultprops = {
    bg: 'rgba(0, 0, 0, 0.4)'
  }
  const newProps = Object.assign({}, defaultprops, props)
  console.log(props)
  return (
    <div onClick={(e)=>{
      console.log(e.target.className)
      if(e.target.className == 'model'){
        props.onClose()
      }
    }} className="model" style={
      {
        background: newProps.bg
      }
    }>
      <div className="model_content">
        {props.children}
      </div>
    </div>
  )
}
