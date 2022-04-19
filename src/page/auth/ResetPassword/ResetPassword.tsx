import { Form, Input, Button  } from 'antd';
import {  } from 'antd/lib/form/Form';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import AuthLayoutProps from '../../../layouts/AuthLayout';



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

const LoginButton = styled(Button)`
    background: #2ECF94;
    border-color: #2ECF94;
    &:hover {
        background: #3DBEA3;
        border-color: #3DBEA3;
    }
`


const ResetPassword = () => {
    const onSubmit = () => {
        console.log("test")
    }

    return (
        <AuthLayoutProps>
        <Form onFinish={onSubmit} className="reset-form" layout="vertical">
            <h1>Reset password</h1>
            <p>Enter your new password</p>
            <Form.Item label="New Password" name="new-password" 
            rules={[
            {
                required: true,
                message: 'Please input your Password!',
            },
            ]}>
                <Input placeholder='Enter your new password' ></Input>
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirm-password"
            rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
            ]}>
                <Input.Password placeholder='Retype your new password' ></Input.Password>
            </Form.Item>
            <Form.Item>
                <LoginButton type="primary" htmlType="submit" block className="login-form-button">
                SEND THE RESET PASSWORD LINK
                </LoginButton>
                <RegisterLink href="/Login">Back to login</RegisterLink>
            </Form.Item>
        </Form>
        </AuthLayoutProps>
    ) 
}

export default ResetPassword;