import React, { Component } from 'react';
import CheckBoxGroup from './index'
import getAllStudents from '../StudentTest/Student'

export default class Test extends Component {
  state = {
    my_data: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' },
      { value: 'other', text: '其他' }
    ],
    chooseData: []
  }
  // componentDidMount生命周期专门用于请求数据等操作
  async componentDidMount() {
    const data = await getAllStudents();
    const a = data.map(ele => {
      return { value: ele.id.toString(), text: ele.name }
    })
    this.setState({
      my_data:a
    })
  }
  my_onChange = (newArr) => {
    console.log('newArr', newArr)
    this.setState({
      chooseData: newArr
    })
  }

  render() {
    return (
      <CheckBoxGroup
        name={'cyy'}
        datas={this.state.my_data}
        chooseData={this.state.chooseData}
        my_onChange={this.my_onChange}
      >
      </CheckBoxGroup>
    )
  }
}
