import React, { Component } from 'react';
import my_proptype from '../utils/proptype'
import Proptypes from 'prop-types';
// 一组复选框
export default class index extends Component {
  constructor(props) {
    super(props)
  }
  // 默认属性值
  static defaultProps = {
    datas: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' },
      { value: 'other', text: '其他' }
    ],
    chooseData: ['basketball']
  }
  // 属性约束(验证)
  static propTypes = {
    datas: my_proptype.groupDatas.isRequired,
    name: Proptypes.string.isRequired,
    chooseData: my_proptype.chooseData,
    my_onChange: Proptypes.func
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
