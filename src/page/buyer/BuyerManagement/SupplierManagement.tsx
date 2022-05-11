import { Layout, Space, PageHeader, DatePicker, Input, Button } from "antd";
import Sidebar from '../../../layouts/Sidebar';
import { SiteSider, SiteHeader } from '../MainPageStyle';
import { BarsOutlined, PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import styled from 'styled-components';


const { Search } = Input;

const StyledButton = styled(Button)`
    border-radius: 4px;
`


const SupplierManagement = () => {
    const onSearch = (value:any) => console.log(value);

    return(
        <Sidebar>
            <Layout>
                <SiteHeader>
                    <PageHeader title="Supplier management" extra={[
                    <Search key="1" placeholder="input search text" onSearch={onSearch} style={{ borderRadius: "4px" }}/>,
                    <StyledButton key="2"  icon={<BarsOutlined />}>Filter</StyledButton>,
                    <StyledButton key="3" icon={<PlusOutlined />}>Create new request</StyledButton>,
                    <StyledButton key="4" type="primary" icon={<UserAddOutlined />}>Create new request</StyledButton>
                    ]}> </PageHeader>
                </SiteHeader>
            </Layout>
        </Sidebar>
    )
}

export default SupplierManagement;