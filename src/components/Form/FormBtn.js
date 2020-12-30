import React, { Component } from 'react';
import formCtx from './formContext';

export default class FormBtn extends Component {
  render() {
    return (
      <formCtx.Consumer>
        {value => (
          <button onClick={()=>{
            value.onSubmit()
          }}>
            {this.props.children}
          </button>
        )}
      </formCtx.Consumer>
    )
  }
}
