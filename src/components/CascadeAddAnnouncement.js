import {Menu, Dropdown, Button, message} from 'antd';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import React from "react";


function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menuCategorii = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined/>}>
            Mobila
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined/>}>
            Pentru copii
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined/>}>
            Tehnica
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined/>}>
            Sport
        </Menu.Item>
    </Menu>
)
const menuProdus = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined/>}>
            Scaun
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined/>}>
            Dulap
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined/>}>
            Pat
        </Menu.Item>
    </Menu>
)

const DropdownApp = () => (

        < div className={'TextField'}>

            <Dropdown overlay={menuCategorii}>
                <Button style={{margin: '70px', background: 'white', width: '100px'}}>
                    Categorii <DownOutlined/>
                </Button>
            </Dropdown>
            <Dropdown overlay={menuProdus}>
                <Button style={{margin: '0px', background: 'white', width: '100px'}}>
                    Produs <DownOutlined/>
                </Button>
            </Dropdown>

        < /div>
    )
;

export default DropdownApp;