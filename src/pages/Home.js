import React from 'react';
import SiderApp from "../components/Sider";
import CardApp from "../components/CardApp";
import {Row, Col, Layout} from "antd";



const Home = () => {
    return (
        <>
            <Layout>
                <SiderApp/>
                <Layout>


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
}
export default Home;