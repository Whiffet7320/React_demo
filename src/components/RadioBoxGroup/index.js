import React, { Component } from 'react'
import my_proptype from '../utils/proptype';
import ipropTypes from 'prop-types'
export default class index extends Component {
  // 默认属性值
  static defaultProps = {
    my_datas: [
      { value: 1, text: '男' },
      { value: 0, text: '女' }
    ],
    value: '0',
  }
  // 属性约束(验证)
  static propTypes = {
    my_datas: my_proptype.groupDatas.isRequired,
    value: ipropTypes.string.isRequired,
    name: ipropTypes.string.isRequired,
    my_onChange: ipropTypes.func
  }
  RadioOnChange = e => {
    // console.log('cyyy',e.target.value)
    if (e.target.checked) {
      // 被点击的那一个单选框
      this.props.my_onChange && this.props.my_onChange(e.target.value)
    }
  }
  getRadioBox() {
    return this.props.my_datas.map(ele => {
      return <label key={ele.value}>
        <input
          type="radio"
          name={this.props.name}
          checked={this.props.value === ele.value}
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
