import React from 'react';
import ReactDOM from 'react-dom';
import Student from './components/Student';
import StudentList from './components/StudentList'
const appkey = "demo13_1545210570249";

async function my_fetch() {
  let stus = await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`).then(res => {
    return res.json()
  }).then(resf => {
    return resf.data
  })
  return stus
}
const obj = {
  address: "重庆111",
  appkey: "demo13_1545210570249",
  birth: 1999,
  ctime: 1607330154,
  email: "111@qq.com",
  id: 70949,
  name: "cyy123456789",
  phone: "19923621111",
  sNo: "1111",
  sex: 0,
  utime: 1608293101,
}
async function render() {
  ReactDOM.render("数据加载中...", document.getElementById('root'));
  let stus = await my_fetch();
  // ReactDOM.render(<Student {...obj} />, document.getElementById('root'));
  ReactDOM.render(<StudentList stuObj={stus} />, document.getElementById('root'));
}
render()
