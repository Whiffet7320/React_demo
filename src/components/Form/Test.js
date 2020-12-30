import React, { Component } from 'react';
import Form from './index'

export default class Text extends Component {
  render() {
    return (
      <div className='form'>
        <Form on_submit={(data) => {
          console.log(data)
        }}>
          <span>用户名：</span>
          <Form.input type={'test'} name={'cyyTest'} />
          <br />
          <br />
          <span>密码：</span>
          <Form.input type={'password'} name={'cyyPassword'} />
          <br />
          <Form.button>submit</Form.button>
        </Form>
      </div>
    )
  }
}
