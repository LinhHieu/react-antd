import { Form, Input, Button, Checkbox, message } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import AuthLayoutProps from '../../../layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';


const axios = require('axios');

const ForgotPasswordLink = styled.a`
    float: right;
    &:hover {
        color: #3DBEA3;
    }
`

const RegisterLink = styled.a`
    padding-top: 20px;
    width: 100%;
    display: block;
    text-align: center;
    &:hover {
        color: #3DBEA3;
    }
`

const LoginCheckbox = styled(Checkbox)`
    float: left;
`
const LoginButton = styled(Button)`
    &:hover {
        background: #3DBEA3;
        border-color: #3DBEA3;
    }
`
interface Loginvalue {
    email: string,
    password: string
}

interface LoginAPIResponse {
    jwt: string;
    user: User[];
}

interface User {
    id:        number;
    username:  string;
    email:     string;
    provider:  string;
    confirmed: boolean;
    blocked:   boolean;
    createdAt: Date;
    updatedAt: Date;
  }


const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onSubmit = (values:Loginvalue) => {
        axios.post('http://localhost:1337/api/auth/local', {
            identifier: values.email,
            password: values.password
          })
          .then(function (response:any) {
            message.success('Login successfully');
            const resJson:string = response?.data.jwt;
            localStorage.setItem('Token', resJson);
            navigate('/Buyer')
          })
          .catch(function (error: Error) {
            message.error('Can not find user');
          });
    }

    return (
        <AuthLayoutProps>
        <Form onFinish={onSubmit} form={form} className="login-form" layout="vertical">
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
                <LoginCheckbox checked={true}>Remember me</LoginCheckbox>
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