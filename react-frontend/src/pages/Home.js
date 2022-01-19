import React, {useEffect, useState} from 'react';
import {Layout} from "antd";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import authToken from "../utils/authToken";
import Filter from "./Filter";
import {logoutUser} from "../service";

const Home = () => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }


    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    console.log(auth.isLoggedIn);
    if (!auth.isLoggedIn && localStorage.jwtToken) {
        dispatch(logoutUser());
    }


    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    return (
        <>
            <Layout>
                <Filter/>
            </Layout>
        </>
    );
}


export default Home;