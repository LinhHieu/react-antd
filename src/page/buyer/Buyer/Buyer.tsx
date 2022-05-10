import { Layout, Space, PageHeader, DatePicker } from "antd";
import Sidebar from "../../../layouts/Sidebar";
import { useState, useEffect, useCallback } from 'react';
import {SiteSider, SiteHeader } from '../MainPageStyle';
import styled from 'styled-components';
import Usercheck from "../../../Assets/usercheck.png";
import Supplier from "../../../Assets/supplier.png";
import Formicon from "../../../Assets/formicon.png";
import SupplierChart from "./SupplierChart";
import RequiredActionList from "./RequiredActionList";

const { Header, Content, Footer, Sider } = Layout;

const axios = require('axios');

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
    width: 32%;
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
    width: 32%;
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
    width: 66%;
    height: 620px;
`


const ContentPage = styled(Content)`
    margin: 0 30px 0 20px;
`
interface Reponse {
    id:         number;
    SupplierName: string;
    RequestDate:  Date;
    Status:       string;
    Form:         string;
    Email:        string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
}
const Buyer = () => {
    const [userData, setUserData] = useState<Reponse[]>([]);
    const [collapsed, setCollapsed] = useState(false);
    const [Page, setPage] = useState(null);
    const token = localStorage.getItem("Token");
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
      };

        useEffect(() => {
            axios.get('http://localhost:1337/api/responses', {
            headers: {'Authorization': `Bearer ${token}` }
            })
            .then(function (response:any) {
                const ResponeValue = response.data.data;
                console.log(ResponeValue);
                let DataList = ResponeValue.map((data:any) => {
                    return {
                        SupplierName: data.attributes.SupplierName,
                        id: data.id,
                        RequestDate: data.attributes.RequestDate,
                        Status: data.attributes.Status,
                        Form: data.attributes.Form,
                        Email: data.attributes.Email,
                    }
                })
                setUserData(DataList);
                setPage(ResponeValue.meta.pagination.pageSize);
            })
            .catch(function (error:any) {
            console.log(error);
            });
    }, []);
    return(
        <Sidebar>
            <Layout>
                <SiteHeader>
                    <PageHeader title="Dashboard" extra={[<DatePicker.RangePicker />]}> </PageHeader>
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
                            </ChartAnalytics>
                        </ChartInformation>
                        <ActionList>
                            <RequiredActionList data={userData} pageSize={Page}/>
                        </ActionList>
                    </BodyInformationList>
                </ContentPage>
                </Layout>
            </Sidebar>
        
    )
}

export default Buyer;