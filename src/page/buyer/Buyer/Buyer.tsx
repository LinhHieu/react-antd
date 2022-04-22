import { Layout } from "antd";
import Sidebar from "../../../layouts/Sidebar";
import { useState } from 'react';
import {SiteSider, SiteHeader } from '../MainPageStyle';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;


const NumberAnalytic = styled.div`
    display: flex;
    justify-content:space-between;
`

const BodyInformationList = styled.div`
    display: flex;
    justify-content:space-between;
`

const ChartInformation = styled.div`
    display: flex;
    flex-direction: column;
`
const ChartAnalytics = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    width: 450px;
    height: 270px;
`

const NumberBox = styled.div`
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    width: 450px;
    height: 130px;
`
const ActionList = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    width: 1030px;
    height: 560px;
`


const ContentPage = styled(Content)`
    margin: 0 30px 0 20px;
`


const Buyer = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

    return(
        <Layout style={{
            minHeight: '100vh',
          }}>
              <SiteSider collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="lg" width={260} collapsedWidth={120} trigger={null}>
                <div className="logo" />
                <Sidebar />
                </SiteSider>
            <Layout>
                <SiteHeader>
                    <h1><b>DashBoard</b></h1>
                </SiteHeader>
                <ContentPage>
                    <NumberAnalytic>
                        <NumberBox>abc</NumberBox>
                        <NumberBox>def</NumberBox>
                        <NumberBox>mno</NumberBox>
                    </NumberAnalytic>
                    <BodyInformationList>
                        <ChartInformation>
                            <ChartAnalytics>
                                num 1
                            </ChartAnalytics>
                            <ChartAnalytics>
                                num 2
                            </ChartAnalytics>
                        </ChartInformation>
                        <ActionList>
                            list
                        </ActionList>
                    </BodyInformationList>
                </ContentPage>
            </Layout>
        </Layout>
    )
}

export default Buyer;