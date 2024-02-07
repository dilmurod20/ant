import React, {useState} from 'react';
import {Button, Drawer, Form, Input, Select,} from 'antd';
import {useDispatch, useSelector} from "react-redux";

const {Option} = Select
const App = ({open, setOpen}) => {

    const {lavozim} = useSelector(state => state.lavozimlarReducer)
    const {daraja} = useSelector(state => state.ilmiy_darajaReducer)
    const {data} = useSelector(state => state.xodimlarReducer)
    const dispatch = useDispatch()
    const onClose = () => {
        setOpen(false);
    };

    const onFinish = (itemData) => {
        if (data.key){
            dispatch({type:"SAVE_EDIT", payload: itemData })
        }
        else {
            dispatch({type:"ADD_USER", payload: itemData })
        }
    }


    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <Form layout={"vertical"} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true,}]}
                        initialValue={data.name}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Lastname"
                        initialValue={data.lastName}
                        rules={[{required: true,}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        initialValue={data.phone}
                        rules={[{required: true,}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="lavozim"
                        label="Lavozim"
                        initialValue={data.lavozim}
                        rules={[{required: true}]}
                    >
                        <Select placeholder="Lavozim" allowClear>
                            {
                                lavozim.map((item) => <Option value={item.lavozim_nomi}>{item.lavozim_nomi}</Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="daraja"
                        label="Daraja"
                        rules={[{required: true}]}
                        initialValue={data.daraja}
                    >
                        <Select placeholder="Daraja" allowClear>
                            {
                                daraja.map(item=><Option value={item.nomi}>{item.nomi}</Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType={"submit"} className={"w-100"} type={"primary"}> Saqlash </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};
export default App;