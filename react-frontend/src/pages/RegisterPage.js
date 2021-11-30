import React from 'react';
import RegistrationForm from "../components/RegistrationForm";
import Layout from "antd/es/layout/layout";
import {Col, Row} from "antd";



const Register = () => {
    return (
        <>
            <Layout>

                    <Row>
                        <h1 style={{'font-size':28,
                            'margin-left':'70px',
                            'padding':'25px'
                        }}>
                            Înregistreaza-te</h1>
                    </Row>

                <Row>
                    <Col offset={4} span={20}>
                        <RegistrationForm/>
                    </Col>
                </Row>

            </Layout>
        </>
    );
}
export default Register;