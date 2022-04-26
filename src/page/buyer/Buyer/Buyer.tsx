import { Layout, Space } from "antd";
import Sidebar from "../../../layouts/Sidebar";
import { useState } from 'react';
import {SiteSider, SiteHeader } from '../MainPageStyle';
import styled from 'styled-components';
import Usercheck from "../../../Assets/usercheck.png";
import Supplier from "../../../Assets/supplier.png";
import Formicon from "../../../Assets/formicon.png";
import SupplierChart from "./SupplierChart";

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
    width: 30%;
`
const ChartAnalytics = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    
    height: 300px;
`

const NumberBox = styled.div`
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    width: 30%;
    height: 140px;
    display: flex;
    justify-content:space-between;
    border-style: solid;
    border-width: 2px;
    h1 {
        padding-top: 25px;
        font-weight: 500;
        font-size: 36px;
        line-height: 24px;
    }
`

const Totalsuppliers = styled(NumberBox)`
    border-color: #FF9800;
    h1 {
        color: #FF9800;
    }
`

const Pendingrequests = styled(NumberBox)`
    border-color:#2196F3;
    h1 {
        color: #2196F3;
    }
`

const Totalforms = styled(NumberBox)`
    border-color:#E91E63;
    h1 {
        color: #E91E63
    }
`

const IconImage = styled.img`
        height: 45px;
        width: 50px;
`

const ActionList = styled.div`
    margin-top: 20px;
    padding: 20px 20px;
    border-radius: 10px;
    background: #FFFFFF;
    width: 65%;
    height: 620px;
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
        // <Layout style={{
        //     minHeight: '100vh',
        //   }}>
        //       <SiteSider collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="lg" width={260} collapsedWidth={120} trigger={null}>
        //         <div className="logo" />
        //         <Sidebar />
        //         </SiteSider>
        <Sidebar>
            <Layout>
                <SiteHeader>
                    <h1><b>DashBoard</b></h1>
                </SiteHeader>
                <ContentPage>
                    <NumberAnalytic>
                        <Totalsuppliers>
                            <div>
                                Total suppliers
                                <h1>
                                1134
                                </h1>
                            </div>
                            <Space align="center" >
                                <IconImage src={Supplier} />
                            </Space>
                        </Totalsuppliers>
                        <Pendingrequests>
                            <div>
                                Pending requests
                                <h1>
                                1134
                                </h1>
                            </div>
                            <Space align="center" >
                                <IconImage src={Usercheck} />
                            </Space>
                        </Pendingrequests>
                        <Totalforms>
                            <div>
                                Total forms
                                <h1>
                                1134
                                </h1>
                            </div>
                            <Space align="center" >
                                <IconImage src={Formicon} />
                            </Space>
                        </Totalforms>
                    </NumberAnalytic>
                    <BodyInformationList>
                        <ChartInformation>
                            <ChartAnalytics>
                                <SupplierChart />
                            </ChartAnalytics>
                            <ChartAnalytics>
                                Completed request
                            </ChartAnalytics>
                        </ChartInformation>
                        <ActionList>
                            list
                        </ActionList>
                    </BodyInformationList>
                </ContentPage>
                </Layout>
            </Sidebar>
        
    )
}

export default Buyer;