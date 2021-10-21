import React from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image, Badge, Dropdown} from "antd";
import {DownOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";
import {Button} from 'antd';



const HeaderApp = () => (

    <div className={'MyHeader'}>
        <Header style={{ background: 'rgb(230, 234, 255)', padding: '0px 0px', height:'60px'}}>
            <Row >
                <Col >
                    <Image.PreviewGroup>

                        <Image width={65} preview={false} style={{padding: '5px 5px'}}
                               src="https://i.ibb.co/845rwyF/output-onlinepngtools-4.png"/>
                    </Image.PreviewGroup>
                </Col>

                <Col>
                    <h1 className={'GiveIt'}>GiveIt</h1>
                </Col>
                <Col  offset={18}>
                    <Badge size="small" count={5}>
                    <Button size="large" type="default" shape="circle">
                        <MessageOutlined/>

                    </Button>
                    </Badge>
                </Col>

            </Row>
        </Header>
    </div>
);

export default HeaderApp;
