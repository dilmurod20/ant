import React, {useState} from 'react';
import {Button, Drawer, Form, Input, Select, } from 'antd';
const {Option} = Select
const App = ({open, setOpen}) => {

    const onClose = () => {
        setOpen(false);
    };

    const onFinish = (data) => {
        console.log(data)
    }


    return (
        <>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <Form layout={"vertical"} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true,}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Lastname"
                        rules={[{required: true,}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{required: true,}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="lavozim"
                        label="Lavozim"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Lavozim"
                            onChange={""}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="daraja"
                        label="Daraja"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Daraja"
                            onChange={""}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
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