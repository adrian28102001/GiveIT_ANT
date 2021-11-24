 import React from 'react';
import CardApp from "../components/CardApp";
import {Row, Col, Layout} from "antd";



const Home = () => {
    return (
        <>

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

        </>
    );
}
export default Home;