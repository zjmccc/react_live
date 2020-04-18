import React from 'react';
import './add.scss'
import { Button, Input, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='loginBox'>
        <Form onFinish={this.add.bind(this)}>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="请输入您的邮箱" prefix={<UserOutlined />} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" prefix={<UserOutlined />} placeholder="请输入您的密码！" onChange={(e) => { this.setState({ passWord: e.target.value }) }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
  async add() {
    let data = await React.$api.user.add(this.state)
    if (data.data) {
      alert(data.msg)
    } else {
      alert(data.msg)
    }
  }
}