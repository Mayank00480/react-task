import React from 'react'
import {  Button, Checkbox, Form, Input  } from 'antd';
import './signupForm.css';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignupForm = () => {
  return (
    <div className='container'>
        <img src = 'https://th.bing.com/th/id/OIP.zSUKpvz8rlkuIRzkr-P0lgHaHc?rs=1&pid=ImgDetMain' style = {{width : '30px' ,height : '30px',position : 'relative' , bottom : '110px',left : '100px'}}/>
        <div className='heading'>
            <h2>Sign Up</h2>
            <p>or <b style={{color : '#17b582'}}>sign in</b></p>
        </div>
    <Form
    className=''
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
      height : '100vh',
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  placeholder="Email"/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password  placeholder="Password" />
    </Form.Item>

    <Form.Item
      label="Confirm"
      name="confirmPassword"
      rules={[
        {
          required: true,
          message: 'Re enter your password!',
        },
      ]}
    >
      <Input.Password  placeholder="Re enter your password" />
    </Form.Item>
    <div className='contain'>
    <Form.Item
   
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox >Remember me</Checkbox>
    </Form.Item>
    <a href='#'>Forgot Password?</a>
    </div>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
        <div className='btn'>
      <Button className='button' type="primary" htmlType="submit">
        Login
      </Button>
      </div>
    </Form.Item>
  </Form>
  </div>
  )
}

export default SignupForm
