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
    height: 40px;
    width: 60px;
`
const MenuSidebar = styled(Menu)`
    height: 96vh;
    background-color: #2ECF94;
    margin: 15px 15px 15px 15px;
    border-radius: 25px;
    color: white;
    .ant-menu-item{
        height: 50px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
  }
    .ant-menu-item-selected {
    background-color: #3DBEA3 !important;
    color: white!important;
  }
  .ant-menu-item:hover{
    color: white!important;
  }
`
const SiteHeader = styled(Layout)`
    background: #fff;
`
const SiteSider = styled(Sider)`
    background: #F2F3F9;
    .ant-layout-sider-trigger{
        background: gray;
    }
`

const SpanText = styled.span`
    color: #fff;
`

function getItem(label:any, key:any, icon:any, children:any) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    getItem(null, '1',<SidebarLogo src={logo} /> , null),
    getItem('Option 1', '2', <PieChartOutlined />, null),
    getItem('Option 2', '3', <DesktopOutlined />, null),
    getItem('User', 'sub1', <UserOutlined />, null),
    getItem('Team', 'sub2', <TeamOutlined />, null)
  ];

export default function Sidebar({children}: AuthLayoutProps) {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

    const onClick = (e:any) => {
        console.log('click ', e);
      };
    return(
        <Layout style={{
            minHeight: '100vh',
          }}>
            <SiteSider collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="xs" width={260} collapsedWidth={120} trigger={null}>
            
        <MenuSidebar
        onClick={onClick}
        items={items}
       />
            </SiteSider>
            {children}
        </Layout>
        
    )
}
