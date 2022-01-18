import React, {Component, useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image, Badge, Button, Affix, Drawer} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import CascadUser from "./CascadUser";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../service";
import logo from "../assets/logo2.png";


const HeaderApp  = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

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
                <Col offset={17}>
                    <Link exact to="/MyProfile"><CascadUser/></Link>
                </Col>


                <Col style={{marginLeft :'5px'} }>
                    <Link exact to={"/"} onClick={logout}>
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
                            {auth.isLoggedIn ? userLinks : guestLinks}
                        </Row>
                    </Header>
                </Affix>
            </div>

        );
}


export default HeaderApp;
