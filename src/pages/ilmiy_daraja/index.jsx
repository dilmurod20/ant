import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button, Divider, Radio, Table} from 'antd';
import Drawer from "./drawer";

function Index(props) {
    const {daraja} = useSelector(state => state.ilmiy_darajaReducer)
    const [open, setOpen] = useState(false);

    const columns = [
        {
            title: 'Daraja',
            dataIndex: 'nomi',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Bonus',
            dataIndex: 'bonus',
        },

        {
            title: "Actions",
            render: ()=> <div>
                <Button type={"primary"}> Edit </Button>
                <Button type={"primary"} className={"mx-2"} danger> Delete </Button>
            </div>
        }
    ];


// rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Drawer open={open} setOpen={setOpen}/>
            <div>
                <Radio.Group
                    style={{width:"100%"}}
                    onChange={({target: {value}}) => {
                        setSelectionType(value);
                    }}
                    value={selectionType}
                >
                    <Radio value="checkbox">Checkbox</Radio>
                    <Radio value="radio">radio</Radio>
                    <Button onClick={()=>setOpen(prevState => !prevState)} type={"primary"} className={"float-end"}> Add User </Button>
                </Radio.Group>

                <Divider/>

                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={daraja}
                />
            </div>
        </div>
    );
}

export default Index;