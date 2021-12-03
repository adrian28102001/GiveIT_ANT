import React, {useEffect, useState} from 'react';
import CardApp from "../components/CardApp";
import {Row, Col, Layout, Alert} from "antd";
import axios from "axios";
import authToken from "../utils/authToken";
import {connect} from "react-redux";


const Home = (props) => {
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    return(
        <>
            <Alert variant="success">Welcome {props.auth.username}</Alert>
            <Layout>
                <Row align={'center'}>
                    {products.map((p) => <CardApp product={p}/>)}
                </Row>
            </Layout>
        </>
    );
}

const mapStateToProps = state => {
    return{
        auth:state.auth
    }
};

export default connect(mapStateToProps)(Home);