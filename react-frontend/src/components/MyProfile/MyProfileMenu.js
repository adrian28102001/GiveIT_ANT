import { Menu } from 'antd';
import React from "react";

class MyProfileMenu extends React.Component {
    state = {
        current: 'myprofile',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (

            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="myprofile" > MyProfile</Menu.Item>
                <Menu.Item key="fav" > Favorites List </Menu.Item>
                <Menu.Item key="block"> Blocked Users </Menu.Item>
            </Menu>

        );
    }
}
export default  MyProfileMenu;