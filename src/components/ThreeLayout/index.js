import React from 'react';
import './index.css'
import ipropTypes from 'prop-types';
import my_proptype from '../utils/proptype'
// 默认属性
index.defaultProps = {
  minWidth: 800,
  leftWidth: 100,
  rightWidth: 100,
  gap: 0,//间隔
}
// 条件约束（检验数据是否符合条件）
index.propTypes = {
  minWidth: ipropTypes.number.isRequired,
  gap:ipropTypes.number,
  leftWidth: ipropTypes.number,
  rightWidth: ipropTypes.number,
  children:my_proptype.children,
  left:my_proptype.children,
  right:my_proptype.children
}
export default function index(props) {
  return (
    <div className="ThreeLayout" style={{ width: props.minWidth }}>
      <div className="ThreeLayout_main">
        {props.children}
      </div>
      <div className="ThreeLayout_left" style={{ width: props.leftWidth, marginRight: props.gap }}>
        {props.left}
      </div>
      <div className="ThreeLayout_right" style={{ width: props.rightWidth, marginLeft: props.gap }}>
        {props.right}
      </div>
    </div>
  )
}
