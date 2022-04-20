import { Form, Input, Button, Checkbox, Select } from 'antd';
import {  } from 'antd/lib/form/Form';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import AuthLayoutProps from '../../../layouts/AuthLayout';

const { Option } = Select;

const LoginLink = styled.a`
    color: #2ECF94;
    &:hover {
        color: #3DBEA3;
    }
`

const InlineInput = styled.div`
    display:flex;
    justify-content: space-between;
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


const Register = () => {
    const onSubmit = () => {
        console.log("test")
    }

    return (
        <AuthLayoutProps>
        <Form onFinish={onSubmit} className="login-form" layout="vertical">
            <h1>Register new account</h1>
            <p>Have an account? <LoginLink href="/Login">LOGIN NOW</LoginLink></p>
            <InlineInput>
                <Form.Item label="Email" name="email" 
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}>
                    <Input placeholder='Enter your email' ></Input>
                </Form.Item>
                <Form.Item label="Password" name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}>
                    <Input.Password placeholder='Enter your password' ></Input.Password>
                </Form.Item>
            </InlineInput>
            <Form.Item label="Phone number" name="phone" 
            rules={[
            {
                required: true,
                message: 'Please input your phone!',
            },
            ]}>
                <Input placeholder='Enter your phone number' ></Input>
            </Form.Item>
            <Form.Item label="About your business" name="business"
            rules={[
                {
                    required: true,
                    message: 'Write something',
                },
            ]}>
                <Input placeholder='Enter your company' ></Input>
            </Form.Item>
            <Form.Item label="Reason" name="reason"
            rules={[
                {
                    required: true,
                    message: 'Write something',
                },
            ]}>
                <Input placeholder='Why are you interested in using our platform?' ></Input>
            </Form.Item>
            <Form.Item label="Email" name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your email!',
                },
            ]}>
                <Input placeholder='Enter your email' ></Input>
            </Form.Item>
            <Form.Item label="Password" name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}>
                <Input.Password placeholder='Enter your password' ></Input.Password>
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirm-password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}>
                <Input.Password placeholder='Re-type password' ></Input.Password>
            </Form.Item>
            <Form.Item label="Register as" name="role"
            rules={[
                {
                    required: true,
                    message: 'Please choose your role!',
                },
            ]}>
            <Select
                placeholder="Buyer"
                allowClear
            >
                <Option value="Buyer">Buyer</Option>
                <Option value="Supplier">Supplier</Option>
            </Select>
            </Form.Item>
            <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <LoginCheckbox> I have read and agreed to Terms of service and Privacy policy.</LoginCheckbox>
            </Form.Item>
            </Form.Item>
            <Form.Item>
                <LoginButton type="primary" htmlType="submit" block className="login-form-button">
                Log in
                </LoginButton>
            </Form.Item>
        </Form>
        </AuthLayoutProps>
    ) 
}

export default Register;