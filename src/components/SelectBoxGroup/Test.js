import React, { Component } from 'react';
import SelectBoxGroup from './index';
import StudentTest from '../StudentTest/Student'

export default class Test extends Component {
  state = {
    my_datas: [
      // { value: 1, text: '男' },
      // { value: 0, text: '女' }
    ],
    value: 0,
  }
  async componentDidMount() {
    const data = await StudentTest()
    const a = data.map(ele=>{
      return { value: ele.id.toString(), text: ele.name }
    })
    this.setState({
      my_datas:a
    })
  }
  
  my_selectChange=(value)=>{
    this.setState({
      value,
    })
  }
  render() {
    return (
      <>
        <SelectBoxGroup
          name={'cyy'}
          datas={this.state.my_datas}
          value={this.state.value.toString()}
          my_onChange={this.my_selectChange}
        >

        </SelectBoxGroup>
      </>
    )
  }
}
