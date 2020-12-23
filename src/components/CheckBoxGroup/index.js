import React, { Component } from 'react';
// 一组复选框
export default class index extends Component {
  constructor(props) {
    super(props)
  }
  
  handleChange = e => {
    let newArr = []
    // console.log(e.target.checked)
    if (e.target.checked) {
      // 选中
      newArr = [...this.props.chooseData, e.target.value]
    } else {
      newArr = this.props.chooseData.filter(ele => {
        return ele !== e.target.value
      })
    }
    this.props.my_onChange && this.props.my_onChange(newArr)
  }
  getCheckBox() {
    return this.props.datas.map(ele => {
      return <label key={ele.value}>
        <input
          type="checkbox"
          name={this.props.name}
          value={ele.value}
          onChange={this.handleChange}
          checked={this.props.chooseData.includes(ele.value)}
        />
        {ele.text}
      </label>
    })
  }

  render() {
    const bs = this.getCheckBox()
    return (
      <div>
        {bs}
      </div>
    )
  }
}
