import React, {useEffect, useState} from 'react';
import CardApp from "../components/CardApp";
import {Row, Col, Layout} from "antd";
import axios from "axios";
import authToken from "../utils/authToken";


const Home = () => {
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    return(
        <>
            <Layout>
                <Row align={'center'}>
                    {products.map((p) => <CardApp product={p}/>)}
                </Row>
            </Layout>
        </>
    );
}

export default Home;