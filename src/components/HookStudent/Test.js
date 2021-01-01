import React, { useEffect, useState } from 'react';
import HookStudent from './index';
import { getStudents } from '../StudentTest/Student';
import Pager from '../Pager'

export default function Test() {
  const [student, setStudent] = useState([]);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [panelNumber, setPanelNumber] = useState(5);
  useEffect(() => {
    (async function () {
      const res = await getStudents(current, limit);
      console.log(res);
      setStudent(res.findByPage);
      setTotal(res.cont);
    })()
  }, [current, limit])//空数组目的是为了 仅在首次挂载的时候运行
  return (
    <div>
      <HookStudent stus={student} />
      {/*
          * 分页组件
          * 属性：
          * 1. current：初始页码
          * 2. total：总数据量
          * 3. limit：页容量，每页显示的数据量
          * 4. panelNumber：数字页码最多显示多少个
          * 5. onPageChange：当页码改变的事件
    */}
      < Pager
        current={current}
        total={total}
        limit={limit}
        panelNumber={panelNumber}
        onPageChange={(page) => {
          setCurrent(page)
        }}
      />
      <span
        style={{
          marginLeft: '14px'
        }}>每页<input
          onChange={e => {
            // e.target.value==""?10:e.target.value
            setLimit(e.target.value == "" ? 10 : e.target.value)
          }}
          value={limit}
          type="text"
          style={{
            width: '40px',
            margin: '0 4px'
          }} />条
      </span>
    </div>
  )
}
