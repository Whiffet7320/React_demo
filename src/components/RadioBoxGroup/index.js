import React, { Component } from 'react'

export default class index extends Component {
  RadioOnChange = e=>{
    // console.log('cyyy',e.target.value)
    if(e.target.checked){
      // 被点击的那一个单选框
      this.props.my_onChange && this.props.my_onChange(e.target.value)
    }
  }
  getRadioBox(){
    return this.props.my_datas.map(ele=>{
      return <label key={ele.value}>
        <input 
        type="radio" 
        name={this.props.name}
        checked={this.props.value == ele.value}
        onChange={this.RadioOnChange}
        value={ele.value}
        />
        {ele.text}
      </label>
    })
  }
  render() {
    const my_radio = this.getRadioBox()
    return (
      <div>
        {my_radio}
      </div>
    )
  }
}
