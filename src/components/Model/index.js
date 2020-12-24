import React from 'react';
import './index.css';
import ipropTypes from 'prop-types';
import my_propTypes from '../utils/proptype'

// 默认属性
index.defaultProps = {
  bg: 'rgba(0, 0, 0, 0.4)'
}
// 条件约束（检验数据是否符合条件）
index.propTypes = {
  onClose:ipropTypes.func.isRequired,
  bg:ipropTypes.string,
  children:my_propTypes.children
}
export default function index(props) {
  // const newProps = Object.assign({}, defaultprops, props)
  console.log(props)
  return (
    <div onClick={(e)=>{
      // console.log(e.target.className)
      if(e.target.className == 'model'){
        props.onClose()
      }
    }} className="model" style={
      {
        background: props.bg
      }
    }>
      <div className="model_content">
        {props.children}
      </div>
    </div>
  )
}
