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
                    <Search placeholder="input search text" onSearch={onSearch} style={{ borderRadius: "4px" }}/>,
                    <StyledButton icon={<BarsOutlined />}>Filter</StyledButton>,
                    <StyledButton icon={<PlusOutlined />}>Create new request</StyledButton>,
                    <StyledButton type="primary" icon={<UserAddOutlined />}>Create new request</StyledButton>
                    ]}> </PageHeader>
                </SiteHeader>
            </Layout>
        </Sidebar>
    )
}

export default SupplierManagement;