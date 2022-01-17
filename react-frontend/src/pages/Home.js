import React, {useEffect, useState} from 'react';
import CardApp from "../components/CardApp";
import {Row, Layout} from "antd";
import axios from "axios";
import {useSelector} from "react-redux";
import authToken from "../utils/authToken";

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
                <Row style={{padding:'50px', marginLeft:100}}>
                    {products.map((p) => <CardApp product={p}/>)}
                </Row>
            </Layout>
</>
    );
}


export default Home;