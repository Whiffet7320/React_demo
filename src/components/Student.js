import React from 'react'

export default function Student(props) {
  // console.log(props)
  return (
    <div>
            【姓名】{props.name}  
            【email】{props.email}
            【性别】{props.sex === 1 ? "男" : "女"}
            【出生年份】{props.birth}
    </div>
  )
}
