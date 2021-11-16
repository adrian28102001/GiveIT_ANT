import React from "react";
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const CascadUser = () => {
    const menu = (
        <Menu>
            <Menu.Item>
                1st menu item
            </Menu.Item>
            <Menu.Item>
                2nd menu item
            </Menu.Item>
            <Menu.Item>
                3rd menu item
            </Menu.Item>
        </Menu>
    );
    return(
        <Dropdown overlay={menu}>

                <Button style={{marginLeft:'10px'}} size={'large'} type={'default'} shape={'circle'}>
                    <UserOutlined />
                </Button>

        </Dropdown>

    );
}

export default CascadUser;