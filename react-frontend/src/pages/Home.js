import React, {useEffect, useState} from 'react';
import CardApp from "../components/CardApp";
import {Button, Layout, Row} from "antd";
import axios from "axios";
import {connect} from "react-redux";
import authToken from "../utils/authToken";
import Filter from "./Filter";
import Title from "antd/es/typography/Title";

const Home = () => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    return (
        <>
            <Layout>
                <Filter/>

                <Row justify={"center"}>
                    <Title level={4}>Toate produsele:</Title>
                </Row>

                <Row style={{padding: '50px', marginLeft: 100}}>
                    {
                        products
                            .map((p) => <CardApp product={p} />)
                    }
                </Row>

                {/*<Row style={{padding:'50px', marginLeft:100}}>*/}
                {/*    { <CardApp products = {*/}
                {/*        products.filter((products) => products.category === "Gadget-uri")}*/}
                {/*    />}*/}
                {/*</Row>*/}
            </Layout>
        </>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(Home);