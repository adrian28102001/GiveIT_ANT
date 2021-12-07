
import React, {useEffect, useState} from "react";
import {Col, Layout} from "antd";
import authToken from "../utils/authToken";
import axios from "axios";
import Carusel from "../components/ProductDetailsComponents/carousel";

const DetailsPage = () => {

    return (
        <div>
            <Layout style={{height:"100vh"}}>
              <Col offset={2} span={10} style={{padding:"40px"}}>
                 <Carusel/>
              </Col>

            </Layout>
        </div>
    );
}

export default DetailsPage;