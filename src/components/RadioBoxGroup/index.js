import React, { Component } from 'react'
import my_proptype from '../utils/proptype';
import ipropTypes from 'prop-types';
import withDataGroup from '../hoc/withDataGroup'

// 一个单选框
class index extends Component {
  // 属性约束(验证)
  static propTypes = {
    info: my_proptype.oneDatas.isRequired,
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
  render() {
    return (
      <label>
      <input
        type="radio"
        name={this.props.name}
        checked={this.props.value === this.props.info.value}
        onChange={this.RadioOnChange}
        value={this.props.info.value}
      />
      {this.props.info.text}
    </label>
    )
  }
}
export default withDataGroup(index)

// // 一组单选框
// export default class index extends Component {
//   // 默认属性值
//   static defaultProps = {
//     datas: [
//       { value: 1, text: '男' },
//       { value: 0, text: '女' }
//     ],
//     value: '0',
//   }
//   // 属性约束(验证)
//   static propTypes = {
//     datas: my_proptype.groupDatas.isRequired,
//     value: ipropTypes.string.isRequired,
//     name: ipropTypes.string.isRequired,
//     my_onChange: ipropTypes.func
//   }
//   RadioOnChange = e => {
//     // console.log('cyyy',e.target.value)
//     if (e.target.checked) {
//       // 被点击的那一个单选框
//       this.props.my_onChange && this.props.my_onChange(e.target.value)
//     }
//   }
//   getRadioBox() {
//     return this.props.datas.map(ele => {
//       return <label key={ele.value}>
//         <input
//           type="radio"
//           name={this.props.name}
//           checked={this.props.value === ele.value}
//           onChange={this.RadioOnChange}
//           value={ele.value}
//         />
//         {ele.text}
//       </label>
//     })
//   }
//   render() {
//     const my_radio = this.getRadioBox()
//     return (
//       <div>
//         {my_radio}
//       </div>
//     )
//   }
// }
