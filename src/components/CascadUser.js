import React from "react";

import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const CascadUser = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
            </Menu.Item>
        </Menu>
    );
    return(
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
                <Button style={{'margin-left':'10px'}} size={'large'} type={'default'} shape={'circle'}>
                    <UserOutlined />
                </Button>
            </a>
        </Dropdown>

    );
}

export default CascadUser;