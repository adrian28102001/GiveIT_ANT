import React from 'react';
import './App.less';
import SiderApp from "./components/Sider";
import {Row, Col, Layout} from "antd";
import Header from "./components/Header";
import CardApp from "./components/CardApp";



const App = () => (
    <>
        <Layout>
            <SiderApp/>
            <Layout>
                <Header/>

                <Row align={'center'}>
                    <Col>
                        <CardApp/>
                    </Col>

                    <Col>
                        <CardApp/>
                    </Col>
                    <Col>
                        <CardApp/>
                    </Col>
                </Row>

                <Row align={'center'}>
                    <Col>
                        <CardApp/>
                    </Col>

                    <Col>
                        <CardApp/>
                    </Col>
                    <Col>
                        <CardApp/>
                    </Col>
                </Row>

                <Row align={'center'}>
                    <Col>
                        <CardApp/>
                    </Col>

                    <Col>
                        <CardApp/>
                    </Col>
                    <Col>
                        <CardApp/>
                    </Col>
                </Row>

            </Layout>
        </Layout>
    </>
);

export default App;