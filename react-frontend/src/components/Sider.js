import React, {Component} from "react";
import {Button, Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import {logoutUser} from "../service";
import {connect} from "react-redux";

const {Sider} = Layout;


class SiderApp extends Component {


    render() {
        const userLinks = (
            <div style={{padding: '40px 60px'}}>
                <Link exact to="/add_announcement"><Button type="primary" ghost>
                    Creaza un anunt
                </Button></Link>
            </div>

        );

        const guestLinks = (
            <div>
            </div>
        );

        return (
            <div className={'Sider'}>
                <Sider className="site-layout-background" width={200}>

                    <Menu
                        mode="inline"
                        style={{

                            height: '92vh',
                            position: 'fixed',
                            left: 0,
                            width: '250px',

                        }}>

                        {this.props.auth.isLoggedIn ? userLinks : guestLinks}


                        <Menu.Item key="1">Mobila</Menu.Item>
                        <Menu.Item key="2">Pentru copii</Menu.Item>
                        <Menu.Item key="3">Tehnica</Menu.Item>
                        <Menu.Item key="4">Sport</Menu.Item>

                    </Menu>
                </Sider>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(SiderApp);