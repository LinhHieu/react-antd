import { Form, Input, Button, Checkbox  } from 'antd';
import {  } from 'antd/lib/form/Form';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import AuthLayoutProps from '../../../layouts/AuthLayout';


const ForgotPasswordLink = styled.a`
    float: right;
    color: #2ECF94;
    &:hover {
        color: #3DBEA3;
    }
`

const RegisterLink = styled.a`
    padding-top: 20px;
    width: 100%;
    display: block;
    text-align: center;
    color: #2ECF94;
    &:hover {
        color: #3DBEA3;
    }
`

const LoginCheckbox = styled(Checkbox)`
    float: left;
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #2ECF94;
        border-color: #2ECF94;
        outline: none;
    }
`
const LoginButton = styled(Button)`
    background: #2ECF94;
    border-color: #2ECF94;
    &:hover {
        background: #3DBEA3;
        border-color: #3DBEA3;
    }
`


const Login = () => {
    const onSubmit = () => {
        console.log("test")
    }

    return (
        <AuthLayoutProps>
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
                <ForgotPasswordLink className="login-form-forgot" href="/ForgotPassword">
                Forgot password
                </ForgotPasswordLink>
            </Form.Item>
            <Form.Item>
                <LoginButton type="primary" htmlType="submit" block className="login-form-button">
                Log in
                </LoginButton>
                <RegisterLink href="/Register">REGISTER NEW ACCOUNT</RegisterLink>
            </Form.Item>
        </Form>
        </AuthLayoutProps>
    ) 
}

export default Login;