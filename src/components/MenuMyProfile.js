import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Content, Sider } = Layout;

const MenuMyProfile = () => {
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} style = {{background: "white" , color:'black'}}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        User information
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        Favorites items
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Blocked users
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        Your posts
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '1px 11px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        content
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default MenuMyProfile;