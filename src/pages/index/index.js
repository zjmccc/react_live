import React from 'react'
import { Button } from "antd";
import { Link } from 'react-router-dom'
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Link to='/login'>
          <Button>登录</Button>
        </Link>
        <Link to='/add'>
          <Button>注册</Button>
        </Link>
      </div>
    )
  }
}