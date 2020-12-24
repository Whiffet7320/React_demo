import React, { Component } from 'react'
import ipropTypes from 'prop-types';
import my_proptype from '../utils/proptype'

export default class index extends Component {
  // 默认属性
  static defaultProps = {
    my_datas: [
      { value: 1, text: '男' },
      { value: 0, text: '女' }
    ],
    value: '0'
  }
  // 条件约束（检验数据是否符合条件）
  static propTypes = {
    my_datas:my_proptype.groupDatas.isRequired,
    name:ipropTypes.string.isRequired,
    value:ipropTypes.string.isRequired,
    my_onChange:ipropTypes.func
  }
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
