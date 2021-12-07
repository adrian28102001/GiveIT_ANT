import React from 'react';
import Layout from "antd/es/layout/layout";
import {Col, Row} from "antd";
import LoginForm from "./LoginForm";

const Login = () => {

    return (
        <>
            <Layout style={{height:'100vh'}}>
                <Row>
                    <h1  style={{'font-size':36,
                        marginLeft:'100px',
                        padding:'25px',
                        color:'#1890ff'
                    }}>
                        Log In
                    </h1>
                </Row>

                <Row>
                    <Col offset={8}>
                        <LoginForm/>
                    </Col>
                </Row>

            </Layout>
        </>
    );
}
export default Login;