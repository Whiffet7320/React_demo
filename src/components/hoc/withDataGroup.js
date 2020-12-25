// 实现根据数据渲染出一组表单组件（高阶组件）
import React from 'react'
// import CheckBoxGroup from '../CheckBoxGroup'
export default function withDataGroup(Comp) {
  return class withDataGroup extends React.Component {
    static defaultProps = {
      datas: [
        { value: 'football', text: '足球' },
        { value: 'basketball', text: '篮球' },
        { value: 'other', text: '其他' }
      ],
    }
    render() {
      console.log(this.props)
      const newComp = this.props.datas.map(ele => {
        return <Comp key={ele.value} {...this.props} info={ele} />
      })
      // if()
      return (
        <>
          {newComp}
        </>
      )
    }
  }
}

