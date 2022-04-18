import { Form, Input, Button, Checkbox  } from 'antd';
import {  } from 'antd/lib/form/Form';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const LoginFrom = styled(Form)`
    float: right;
`


const LoginFromForgot = styled.a`
    float: right;
`

const LoginCheckbox = styled(Checkbox)`
    float: left;
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #2ECF94;
        border-color: #2ECF94;
        outline: none;
    }
`


const Login = () => {
    const onSubmit = () => {
        console.log("test")
    }

    return (
        <Form onFinish={onSubmit} className="login-form" layout="vertical">
            <h1>Welcome back!</h1>
            <p>Sign in by entering information below</p>
            <Form.Item label="Email" name="email" 
            rules={[
            {
                required: true,
                message: 'Please input your Username!',
            },
            ]}>
                <Input placeholder='Enter your company' ></Input>
            </Form.Item>
            <Form.Item label="Password" name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
            ]}>
                <Input.Password placeholder='Enter your company' ></Input.Password>
            </Form.Item>
            <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <LoginCheckbox>Remember me</LoginCheckbox>
            </Form.Item>
                <LoginFromForgot className="login-form-forgot" href="">
                Forgot password
                </LoginFromForgot>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block className="login-form-button">
                Log in
                </Button>
                <a href="">register now!</a>
            </Form.Item>
        </Form>
    ) 
}

export default Login;