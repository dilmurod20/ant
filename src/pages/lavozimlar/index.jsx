import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button, Divider, Radio, Table} from 'antd';
import Drawer from "./drawer";

function Index(props) {
    const {lavozim} = useSelector(state => state.lavozimlarReducer)
    const [open, setOpen] = useState(false);
    const columns = [
        {
            title: 'Lavozim',
            dataIndex: 'lavozim_nomi',
            render: (text) => <a>{text} </a>,
        },
        {
            title: 'Maosh',
            dataIndex: 'maosh',
        },

        {
            title: "Actions",
            render: (item)=> <div>
                <Button type={"primary"} > Edit </Button>
                <Button  type={"primary"} className={"mx-2"} danger> Delete </Button>
            </div>
        }
    ];


    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
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
                    dataSource={lavozim}
                />
            </div>
        </div>
    );
}

export default Index;