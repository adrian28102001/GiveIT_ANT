import React from "react";
import {Layout, Menu} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Sider} = Layout;

const SiderApp = () => {
    return (
        <div className={'Sider'}>
            <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    style={{
                        position: 'fixed',
                        height: '100vh',
                        width: '200px'
                    }}>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Mobila">
                        <Menu.Item key="1">Scaun</Menu.Item>
                        <Menu.Item key="2">Dulap</Menu.Item>
                        <Menu.Item key="3">Masa</Menu.Item>
                        <Menu.Item key="4">Pat</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </div>
    );
}
export default SiderApp;