import { PageHeader, Button, Descriptions, Input, DatePicker, Table, Tag, Space } from 'antd';
const { Search } = Input;


const columns = [
    {  
        title: "Supllier's name",
        dataIndex: 'SupplierName',
        key: 'SupplierName'
    },
    {
        title: 'Request Date',
        dataIndex: 'RequestDate',
        key: 'RequestDate'
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
    },
    {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email'
    },
    {
        title: 'Form',
        dataIndex: 'Form',
        key: 'Form'
    }
]

const RequiredActionList = (props:any) => {
    const onSearch = (value:any) => console.log(value);

    return (
        <div>
        <PageHeader title="Action required" extra={[
            <Search placeholder="input search text" allowClear key="1" onSearch={onSearch} style={{ width: 350 }} />,
            <DatePicker key="2"  />]}>
        </PageHeader>

        <Table columns={columns} dataSource={props.data}>

        </Table>
        </div>
    )
}

export default RequiredActionList;

// {props.data.map((acc:any, index:any) => (
//     <div key={index}>
//         {acc.SupplierName}, {acc.id}, {acc.Status}, {acc.RequestDate}, {acc.Email}
//     </div>
// ))}