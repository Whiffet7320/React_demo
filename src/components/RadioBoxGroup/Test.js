import React, { Component } from 'react';
import RadioBoxGroup from './index';
import getAllStudents from '../StudentTest/Student';

export default class Test extends Component {
  state = {
    my_datas: [
      // { value: 1, text: '男' },
      // { value: 0, text: '女' }
    ],
    value: '',
  }
  async componentDidMount() {
    const data = await getAllStudents()
    const newData = data.map(ele => {
      return { value: ele.id.toString(), text: ele.name }
    })
    this.setState({
      my_datas: newData
    })
  }

  my_radioChange = (value) => {
    console.log('chuf', value)
    this.setState({
      value,
    })
  }
  render() {
    return (
      <div>
        <RadioBoxGroup
          name={'cyy'}
          datas={this.state.my_datas}
          value={this.state.value.toString()}
          my_onChange={this.my_radioChange}
        >
        </RadioBoxGroup>
      </div>
    )
  }
}
