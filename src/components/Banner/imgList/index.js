import React, { Component } from 'react'
import ipropTypes from 'prop-types';
// 图片渲染区域
export default class ImgList extends Component {
  static defaultProps = {
    bannerWidth: 520,
    bannerHeight: 280,
    imgSrc: [],
    interval: 16,
  }
  static propTypes = {
    bannerWidth: ipropTypes.number.isRequired,
    bannerHeight: ipropTypes.number.isRequired,
    imgSrc: ipropTypes.arrayOf(ipropTypes.string).isRequired,
    duration: ipropTypes.number.isRequired,
  }
  imgListContent = el => {
    this.imgListDiv = el;
  }
  timer = null;
  toRun = index => {
    if (index < 0) {
      index = 0;
    } else if (index > this.props.imgSrc.length - 1) {
      index = this.props.imgSrc.length;
    }
    let curLeft = parseFloat(window.getComputedStyle(this.imgListDiv).marginLeft);//当前的位置
    let targetLeft = -index * this.props.bannerWidth;//运动的目标位置
    console.log(curLeft, targetLeft);
    const times = Math.ceil(this.props.duration / this.props.interval)//运动的次数
    let curTimes = 0;//当前运动的次数
    const totalDis = targetLeft - curLeft;//总距离
    const dis = totalDis / times;//每次运动的距离
    clearInterval(this.timer)// 情况是 如果先往右滑动但是还未结束就开始往左滑，要先停止之前的动画
    this.timer = setInterval(() => {
      curTimes++;
      curLeft += dis;
      this.imgListDiv.style.marginLeft = curLeft + 'px';
      if (curTimes == times) {
        this.imgListDiv.style.marginLeft = targetLeft + 'px';
        clearInterval(this.timer)
      }
    }, this.props.interval);
  }
  render() {
    const imgs = this.props.imgSrc.map((ele, i) => {
      return <img style={{
        width:this.props.bannerWidth,
        height: this.props.bannerHeight,
      }} key={i} src={ele} alt="" />
    })
    return (
      <div ref={this.imgListContent} className="banner_ImgList" style={{
        width: this.props.bannerWidth * this.props.imgSrc.length,
        height: this.props.bannerHeight,
      }}>
        {imgs}
      </div>
    )
  }
}
