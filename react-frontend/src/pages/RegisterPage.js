import React from 'react';
import RegistrationForm from "../components/RegistrationForm";
import Layout from "antd/es/layout/layout";
import {Col, Row} from "antd";



const Register = () => {
    return (
        <>
            <Layout>

                    <Row>
                        <h1 style={{'font-size':36,
                            marginLeft:'70px',
                            padding:'25px',
                            color:'#1890ff'
                        }}>
                            Înregistreaza-te</h1>
                    </Row>

                <Row>
                    <Col offset={5} >
                        <RegistrationForm/>
                    </Col>
                </Row>

            </Layout>
        </>
    );
}
export default Register;