import React, { Component } from 'react'

export default class index extends Component {
  selectChange = e => {
    this.props.my_onChange && this.props.my_onChange(e.target.value, this.props.name, e);
  }
  getSelectBox = () => {
    return this.props.my_datas.map(ele => {
      return <option
        key={ele.value}
        value={ele.value}
      >
        {ele.text}
      </option>
    })
  }
  render() {
    const my_select = this.getSelectBox()
    return (
      <select name={this.props.name}
        value={this.props.value}
        onChange={this.selectChange}
      >
        {my_select}
      </select>
    )
  }
}
