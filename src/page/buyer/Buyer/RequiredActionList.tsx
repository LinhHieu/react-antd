import { PageHeader, Button, Descriptions, Input, DatePicker } from 'antd';
const { Search } = Input;

const RequiredActionList = (props:any) => {
    const onSearch = (value:any) => console.log(value);

    return (
        <div>
        <PageHeader title="Action required" extra={[
            <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 }} />,
            <DatePicker style={{ width: '75%' }} />]}>
        </PageHeader>
        {/* {props.data.map((acc:any, index:any) => (
            <div key={index}>
                {acc.SupplierName}, {acc.id}, {acc.Status}
            </div>
        ))} */}
        </div>
    )
}

export default RequiredActionList;
