import React, {useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image, Badge, Button, Affix} from "antd";
import {MessageOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import CascadUser from "./CascadUser";
import DrawerForm from "../pages/NewAcc";


const HeaderApp = () => {

    return (

        <div className={'MyHeader'}>
            <Affix offsetTop={0}>
                <Header style={{
                    width: '100%', background: 'rgb(230, 234, 255)', padding: '0px 0px', height: '60px'
                }}>

                    <Row>
                        <Col offset={1}>
                            <Image.PreviewGroup>

                                <Image width={65} preview={false} style={{padding: '5px 5px'}}
                                       src="https://i.ibb.co/845rwyF/output-onlinepngtools-4.png"/>
                            </Image.PreviewGroup>
                        </Col>

                        <Col>
                            <h1 className={'GiveIt'}>GiveIt</h1>
                        </Col>

                        <Col offset={2}>
                            <Link exact to={'/'}>
                                <h3>Home</h3>
                            </Link>
                        </Col>

                        <Col offset={14}>
                            <Badge size="small" count={5}>
                                <Link exact to="/chat"><Button size="large" type="default" shape="circle">
                                    <MessageOutlined/>
                                </Button></Link>
                            </Badge>
                        </Col>

                        <Col>
                            <CascadUser/>
                        </Col>
                        <Col style={{'margin-left':'7px'}}>
                            <DrawerForm/>
                        </Col>
                    </Row>
                </Header>
            </Affix>
        </div>

    );
}
export default HeaderApp;
