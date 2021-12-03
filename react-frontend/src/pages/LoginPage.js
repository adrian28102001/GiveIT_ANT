import React from 'react';
import Layout from "antd/es/layout/layout";
import {Col, Row} from "antd";
import LoginForm from "./LoginForm";



const Login = () => {
    return (
        <>
            <Layout>

                <Row>
                    <h1 style={{'font-size':28,
                        'margin-left':'70px',
                        'padding':'25px'
                    }}>
                        Login</h1>
                </Row>

                <Row>
                    <Col offset={4} span={20}>
                        <LoginForm/>
                    </Col>
                </Row>

            </Layout>
        </>
    );
}
export default Login;