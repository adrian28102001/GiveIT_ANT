import React, {useEffect, useState} from 'react';
import CardApp from "../components/CardApp";
import {Row, Layout} from "antd";
import axios from "axios";
import {useSelector} from "react-redux";
import authToken from "../utils/authToken";
import Filter from "./Filter";
import Title from "antd/es/typography/Title";

const Home = () => {

    //authToken(localStorage.jwtToken);
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);


    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    return(
        <>
            <Layout>
                <Filter/>
                <Row justify={"center"} style={{padding:"3%"}}>
                    <Title level={4}>Toate produsele:</Title>
                </Row>
                <Row style={{padding:'50px', marginLeft:100}}>
                    {products.map((p) => <CardApp product={p}/>)}
                </Row>
            </Layout>
        </>
    );
}


export default Home;