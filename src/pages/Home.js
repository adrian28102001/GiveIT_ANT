import React from 'react';
import SiderApp from "../components/Sider";
import HeaderApp from "../components/Header";
import CardApp from "../components/CardApp";
import {Row, Col, Layout, Affix} from "antd";
import CascadeApp from "../components/CascadUser";


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