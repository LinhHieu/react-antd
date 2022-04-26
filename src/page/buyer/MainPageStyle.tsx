import styled from 'styled-components';
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export const SiteHeader = styled(Header)`
    height: 8vh;
    background: #F2F3F9;
    padding: 0;
`
export const SiteSider = styled(Sider)`
    background: #F2F3F9;
    .ant-layout-sider-trigger{
        background: #F2F3F9;
    }
`