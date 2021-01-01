import React from 'react'
import iPropTypes from "prop-types";
/**
 * 学生列表的组件，纯展示组件，没有状态，从属性中获取数据用于显示
 */
HookStudent.defaultProps = {
  stus:[]
}
HookStudent.propTypes = {
  stus:iPropTypes.arrayOf(
    iPropTypes.shape()
  ).isRequired
}
export default function HookStudent({stus}) {
  const Studentlist = stus.map(ele=>{
    return <li key={ele.id}>{ele.name},{ele.sex==0?'男':'女'}</li>
  })
  return (
    <ul>
      {Studentlist}
    </ul>
  )
}
