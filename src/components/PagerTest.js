import React, { Component } from 'react';
import Pager from './Pager';
import StudentList from './StudentList';
import Model from './Model'

export default class PagerTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      total: 0,
      limit: 10,
      panelNumber: 5,
      students: [],
      modelShow: false,
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
  async my_fetch() {
    let data = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
      .then(res => res.json())
      .then(res => res.data)
    console.log(data)
    this.setState({
      total: data.cont,
      students: data.findByPage
    })
  }
  modelShowFun = ()=>{
    this.setState({
      modelShow:true,
    })
  }
  modelUnshowFun = ()=>{
    this.setState({
      modelShow:false,
    })
  }
  render() {
    return (
      <div>
        <div className='myTest'>
          <StudentList stuObj={this.state.students} />
          <Pager {...this.state} onPageChange={this.handlePageChange} />
        </div>
        {/* model朦层组件 */}
        {this.state.modelShow ?
          (<Model onClose={this.modelUnshowFun} bg={'rgba(140, 140, 140, 0.7)'}>
            <div>
              <h1>数据加载中...</h1>
              <button onClick={this.modelUnshowFun}>关闭朦层</button>
            </div>
          </Model>):null
        }
        <button onClick={this.modelShowFun}>显示朦层</button>
      </div>

    )
  }
}
