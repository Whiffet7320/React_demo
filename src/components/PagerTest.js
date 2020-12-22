import React, { Component } from 'react';
import Pager from './Pager';
import StudentList from './StudentList'

export default class PagerTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      total: 0,
      limit: 10,
      panelNumber: 5,
      students:[],
    }
    this.my_fetch()
  }
  handlePageChange = (page) => {
    // console.log(page)
    this.setState({
      current: page,
    })
    this.my_fetch()
  }
  async my_fetch(){
    let data = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
      .then(res => res.json())
      .then(res => res.data)
    console.log(data)
    this.setState({
      total:data.cont,
      students:data.findByPage
    })
  }
  render() {
    return (
      <div className='myTest'>
        <StudentList stuObj={this.state.students}/>
        <Pager {...this.state} onPageChange={this.handlePageChange} />
      </div>
    )
  }
}
