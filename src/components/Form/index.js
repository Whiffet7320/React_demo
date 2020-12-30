import React, { Component } from 'react';
import formCtx from './formContext';
import FormInput from './FormInput';
import FormBtn from './FormBtn';
import ipropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    on_submit:ipropTypes.func
  }
  state = {
    formData:{},
    changeForm:(name,val)=>{
      this.setState({
        formData:{
          ...this.state.formData,
          [name]:val,
        }
      })
    },
    onSubmit:()=>{
      this.props.on_submit && this.props.on_submit(this.state.formData)
    }
  }
  render() {
    return (
      <formCtx.Provider value={this.state}>
        {this.props.children}
      </formCtx.Provider>
    )
  }
}

Form.input = FormInput;
Form.button = FormBtn;
