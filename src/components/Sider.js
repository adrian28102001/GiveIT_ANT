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
                        <Menu.Item key="1">Mobila</Menu.Item>
                        <Menu.Item key="2">Pentru copii</Menu.Item>
                        <Menu.Item key="3">Tehnica</Menu.Item>
                        <Menu.Item key="4">Sport</Menu.Item>

                </Menu>
            </Sider>
        </div>
    );
}
export default SiderApp;