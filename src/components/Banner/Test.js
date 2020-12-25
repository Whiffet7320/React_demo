import React, { Component } from 'react';
import Banner from './index';
import img1 from './img/7.gif'
import img2 from './img/8.gif'
import img3 from './img/9.gif'
import img4 from './img/6.jpg'
// import img5 from './img/5.webp'
// import img6 from './img/6.jpg'


export default class test extends Component {
  render() {
    return (
      <>
        <Banner imgSrc={[img1,img2,img3,img4]} autoSwitchTime={2500} duration={300}/>
      </>
    )
  }
}
