import React from "react";
import {Menu, Dropdown, Button} from 'antd';
import {UserOutlined} from "@ant-design/icons";

const CascadUser = () => {
    const menu = (
        <Menu>
            <Menu.Item>
               My profile
            </Menu.Item>
            <Menu.Item>
                Favorite items
            </Menu.Item>
            <Menu.Item>
                My posts
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