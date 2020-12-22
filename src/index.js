import React from 'react';
import ReactDOM from 'react-dom';
import Ball from './components/Ball';
import BallList from './components/BallList'

ReactDOM.render(<BallList />, document.getElementById('root'));
// ReactDOM.render(<Ball left={100} top={100} xSpeed={500} ySpeed={200} background={'blue'}/>, document.getElementById('root'));
