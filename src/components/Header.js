import React from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import {Button} from 'antd';

const App = () => (
    <div className={'MyHeader'}>
        <Header style={{background: 'rgb(230, 234, 255)', padding: '0px 0px'}}>
            <Row>
                <Col className="gutter-row" offset={0.6}  span={1.1}>
                    <Image.PreviewGroup>
                        <Image width={65} preview={false} style={{padding: '5px 5px'}}
                               src="https://i.ibb.co/845rwyF/output-onlinepngtools-4.png"/>
                    </Image.PreviewGroup>
                </Col>

                <Col className="gutter-row" span={2}>
                    <h1 className={'GiveIt'}>GiveIt</h1>
                </Col>

                <Col offset={10} span={2}>
                    <Button  type="primary" shape="circle">
                        <MessageOutlined/>
                    </Button>
                </Col>

            </Row>
        </Header>
    </div>
);

export default App;
