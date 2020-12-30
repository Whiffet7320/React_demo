import React, { Component } from 'react';
import ipropTypes from 'prop-types';
import formCtx from './formContext'

export default class FormInput extends Component {
  static propTypes = {
    type: ipropTypes.string.isRequired,//文本框类型
    name: ipropTypes.string.isRequired,//文本框名称
  }
  render() {
    return (
      <formCtx.Consumer>
        {value => (
          <input
            value={value.formData[this.props.name] || ''}
            type={this.props.type}
            onChange={e => {
              value.changeForm(this.props.name, e.target.value)
            }}
          />
        )}
      </formCtx.Consumer>
    )
  }
}
