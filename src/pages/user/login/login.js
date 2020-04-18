import React from 'react';
import './login.scss'
import { Button, Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='loginBox'>
        <Form onFinish={this.logining.bind(this)}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="default size" prefix={<UserOutlined />} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" prefix={<UserOutlined />} placeholder="large Password" onChange={(e) => { this.setState({ passWord: e.target.value }) }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  async logining() {
    let data = await React.$api.user.login(this.state)
    if (data.data) {
      localStorage.setItem('token', data.data)
      this.props.history.push('home')
      alert(data.msg)
    } else {
      alert(data.msg)
    }
  }
}