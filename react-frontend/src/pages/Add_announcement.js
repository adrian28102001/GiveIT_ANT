import React from 'react';
import {Col, Layout, Row} from "antd";
import Announcement from "../components/Announcement";

const Add_announcement = () => {
    return (
        <>
            <Layout style={{height:'150vh'}}>

                <Row>
                    <h1 style={{'font-size':36,
                        marginLeft:'70px',
                        padding:'25px',
                        color:'#1890ff'
                    }}>
                        Creeaza  un anunt</h1>
                </Row>

                <Row>
                    <Col offset={5} >
                        <Announcement/>
                    </Col>
                </Row>

            </Layout>
        </>

    );
}
export default Add_announcement;