import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button, Divider, Popconfirm,message, Radio, Table} from 'antd';
import Drawer from "./drawer";

function Index(props) {
    const {xodimlar} = useSelector(state => state.xodimlarReducer);
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const confirm = (item) => {
        message.success('Click on Yes');
        dispatch({type: "DELETE_USER", payload: item.key})
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    function editUser(item) {
        dispatch({type: "EDIT_DATA", payload: item})
        setOpen(prevState => !prevState)
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Lastname',
            dataIndex: 'lastName',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Lavozim',
            dataIndex: 'lavozim',
        },
        {
            title: 'Daraja',
            dataIndex: 'daraja',
        },
        {
            title: "Actions",
            render: (item) => <div>
                <Button onClick={() => editUser(item)} type={"primary"}> Edit </Button>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={()=>confirm(item)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button  type={"primary"} className={"mx-2"} danger> Delete </Button>
                </Popconfirm>

            </div>
        }
    ];


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
                    style={{width: "100%"}}
                    onChange={({target: {value}}) => {
                        setSelectionType(value);
                    }}
                    value={selectionType}
                >
                    <Radio value="checkbox">Checkbox</Radio>
                    <Radio value="radio">radio</Radio>
                    <Button onClick={() => setOpen(prevState => !prevState)} type={"primary"}
                            className={"float-end"}> Add User </Button>
                </Radio.Group>

                <Divider/>

                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={xodimlar}
                />
            </div>
        </div>
    );
}

export default Index;