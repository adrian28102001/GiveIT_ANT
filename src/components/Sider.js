import React from "react";
import {Button, Layout, Menu} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

const {SubMenu} = Menu;
const {Sider} = Layout;

const SiderApp = () => {
    return (
        <div className={'Sider'}  >
            <Sider className="site-layout-background" width={200} >

                <Menu
                    mode="inline"
                    style={{

                        height: '92vh',
                        position: 'fixed',
                        left:0,
                        width: '250px',

                    }}>
                    <div style={{padding:'40px 60px'}}>
                    <Link exact to="/add_announcement"><Button type="primary" ghost>
                        Creaza un anunt
                    </Button></Link>
                    </div>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Mobila">
                        <Menu.Item key="1">Scaun</Menu.Item>
                        <Menu.Item key="2">Dulap</Menu.Item>
                        <Menu.Item key="3">Masa</Menu.Item>
                        <Menu.Item key="4">Pat</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Pentru copii">
                        <Menu.Item key="5">Jucarii</Menu.Item>
                        <Menu.Item key="6">Haine</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Tehnica">
                        <Menu.Item key="7">Laptop</Menu.Item>
                        <Menu.Item key="8">Telefon</Menu.Item>
                        <Menu.Item key="9">Accesorii telefon</Menu.Item>
                        <Menu.Item key="10">Accesorii laptop</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<LaptopOutlined/>} title="Sport">
                        <Menu.Item key="11">Haltere</Menu.Item>
                        <Menu.Item key="12">Accesorii sport</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </div>
    );
}
export default SiderApp;