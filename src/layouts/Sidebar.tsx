import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../Assets/SidebarLogo.png';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
interface AuthLayoutProps {
    children?: React.ReactNode
}

const SidebarLogo = styled.img`
    margin: 16px;
    height: 40px;
    width: 60px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`
const MenuSidebar = styled(Menu)`
    height: 96vh;
    background-color: #2ECF94;
    margin: 15px 15px 15px 15px;
    border-radius: 25px;
    .ant-menu-item-selected {
    background-color: #3DBEA3 !important;
  }
`
// const SiteHeader = styled(Layout)`
//     background: #fff;
// `
// const SiteSider = styled(Sider)`
//     background: #fff;
//     .ant-layout-sider-trigger{
//         background: gray;
//     }
// `

const SpanText = styled.span`
    color: #fff;
`


export default function Sidebar({children}: AuthLayoutProps) {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

    return(
        // <Layout style={{
        //     minHeight: '100vh',
        //   }}>
        //     <SiteSider collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="xs" width={260} collapsedWidth={120} trigger={null}>
        //     <div className="logo" />
            <MenuSidebar>
                <SidebarLogo src={logo} />
                <Menu.Item>
                <PieChartOutlined style={{color: '#fff'}}/>
                    <SpanText>Dashboard</SpanText>
                </Menu.Item>
                <Menu.Item>
                <PieChartOutlined style={{color: '#fff'}}/>
                    <SpanText>Report & Analytics</SpanText>
                </Menu.Item>
                <Menu.Item>
                    <FileOutlined style={{color: '#fff'}}/>
                    <SpanText>Supplier</SpanText>
                </Menu.Item>
                <Menu.Item>
                    <FileOutlined style={{color: '#fff'}}/>
                    <SpanText>Form</SpanText>
                </Menu.Item>
                <Menu.Item>
                    <FileOutlined style={{color: '#fff'}}/>
                    <SpanText>Support</SpanText>
                </Menu.Item>
                <Menu.Item>
                    <FileOutlined style={{color: '#fff'}}/>
                    <SpanText>Notification</SpanText>
                </Menu.Item>
            </MenuSidebar>
            //</SiteSider>
            /* <Layout >
                <SiteHeader
                className="site-layout-background"
                style={{
                padding: 0,
                maxHeight: 85
                }}
            />
                <Content style={{
              margin: '0 16px',
            }}>
                    {children}
                </Content>
                <Footer>

                </Footer>
            </Layout> */
        //</Layout>
        
    )
}
