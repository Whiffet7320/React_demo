import React, { Component } from 'react';
import ipropTypes from 'prop-types';
import ImgList from './imgList';
import SwitchBtn from './SwitchBtn';
import DotBtn from './DotBtn'

export default class Banner extends Component {
  static defaultProps = {
    bannerWidth: 520,
    bannerHeight: 280,
    imgSrc: [],
    duration: 500,//运动完成的时间
    autoSwitchTime: 2000,//自动切换轮播图的时间
  }
  static propTypes = {
    bannerWidth: ipropTypes.number.isRequired,
    bannerHeight: ipropTypes.number.isRequired,
    imgSrc: ipropTypes.arrayOf(ipropTypes.string).isRequired,
    duration: ipropTypes.number.isRequired,
  }
  state = {
    curIndex: 0//当前索引值
  }
  timer = null;

  autoSwitch = () => {//自动轮播
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrc.length;
      this.setState({
        curIndex: cur
      })
      this.handleClick(cur)
    }, this.props.autoSwitchTime);
  }
  componentDidMount() {
    this.autoSwitch()
  }

  imgListContent = el => {
    this.imgListComp = el
  }
  handleClick = (index) => {//运动函数
    // console.log(this.imgListComp)
    this.imgListComp.toRun(index)
  }
  onSwitch = type => {
    let cur = this.state.curIndex;
    if (type == 'left') {
      cur--
      if (cur < 0) {
        cur = this.props.imgSrc.length - 1;
      }
    } else {
      cur++
      if (cur > this.props.imgSrc.length - 1) {
        cur = 0
      }
    }
    this.setState({
      curIndex: cur
    })
    this.handleClick(cur)
  }
  onDot = index => {
    this.setState({
      curIndex: index
    })
    this.handleClick(index)
  }
  render() {
    return (
      <>
        <div
          className='banner'
          style={{
            width: this.props.bannerWidth,
            height: this.props.bannerHeight,
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={() => {
            clearInterval(this.timer)
          }}
          onMouseLeave={this.autoSwitch}
        >
          <ImgList ref={this.imgListContent} {...this.props} bannerMarginLeft={this.bannerMarginLeft} />
          <SwitchBtn onSwitch={this.onSwitch} />
          <DotBtn onDot={this.onDot} total={this.props.imgSrc.length} activeIndex={this.state.curIndex} />
        </div>
      </>
    )
  }
}
