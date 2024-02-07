import React, { useState } from 'react';
import { MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate()

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{height:"100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical text-center text-white" >
                    <h2 >Logo</h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e)=>navigate(e.key)}
                    items={[
                        {
                            key: '/xodimlar',
                            icon: <UserOutlined />,
                            label: 'Xodimlar',
                        },
                        {
                            key: '/lavozimlar',
                            icon: <VideoCameraOutlined />,
                            label: 'Lavozimlar',
                        },
                        {
                            key: '/ilmiy_daraja',
                            icon: <UploadOutlined />,
                            label: 'Ilmiy-daraja',
                        },
                    ]}
                />
            </Sider>
            <Layout >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                  <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;