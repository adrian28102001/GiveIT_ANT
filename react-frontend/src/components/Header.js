import React, {Component, useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image, Badge, Button, Affix, Drawer} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import CascadUser from "./CascadUser";
import {connect} from "react-redux";
import {logoutUser} from "../service";
import logo from "../assets/logo2.png";


class HeaderApp extends Component {

    logout = () => {
        this.props.logoutUser();
    };

    render() {

        const guestLinks = (
            <>
                <Col offset={17}>
                <Link exact to={"/login"}>
                    <Button type="text">
                        Log In
                    </Button>
                </Link>

                    <Link exact to={"/register"}>
                        <Button type="text" style={{color:'#1890ff'}} >
                            Register
                        </Button>
                    </Link>
                </Col>
            </>
        );

        const userLinks = (
            <>
                <Col offset={16}>
                    <Badge size="small" count={5}>
                        <Link exact to="/chat"><Button size="large" type="default" shape="circle">
                            <MessageOutlined/>
                        </Button></Link>
                    </Badge>
                </Col>

                <Col style={{marginLeft: '5px'}}>
                    <Link exact to="/MyProfile"><CascadUser/></Link>
                </Col>

                <Col style={{marginLeft :'5px'} }>
                    <Link exact to={"/"} onClick={this.logout}>
                        <Button type="text" style={{color:'#1890ff'}}>
                            Log Out
                        </Button>
                    </Link>
                </Col>
            </>
        );
        return (
            <div className={'MyHeader'}>
                <Affix offsetTop={0}>
                    <Header style={{
                        width: '100%', background: 'rgb(230, 234, 255)', padding: '0px 0px', height: '60px'
                    }}>

                        <Row>
                            <Col offset={1}>
                                <Link exact to={'/'}><Image.PreviewGroup>
                                    <Image width={70} preview={false} style={{padding: '5px 5px'}}
                                           src={logo}/>
                                </Image.PreviewGroup></Link>
                            </Col>
                            <Col>
                                <Link exact to={'/'}><h1 className={'GiveIt'}>GiveIt</h1></Link>
                            </Col>
                            {this.props.auth.isLoggedIn ? userLinks : guestLinks}
                        </Row>
                    </Header>
                </Affix>
            </div>

        );
    };
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
        // authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);
