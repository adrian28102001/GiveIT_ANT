import {Button, Card, Col} from 'antd';
import axios from "axios";
import React, { useEffect, useState} from "react";
import smallerCardApp from  "../smallerCardApp";
import CardApp from "../CardApp";
import SmallerCardApp from "../smallerCardApp";
import Row from "antd/es/descriptions/Row";


const UsersPost  = () => {

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]);

    // Get all posts:
    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    // Get user information:
    useEffect(() => {
        axios.get("http://localhost:8080/user/MyProfile").then(({data}) => setUser(data))
    }, [])


        return (
            <>
                <div className="site-card-border-less-wrapper">
                    <Card title="Postarile mele" bordered={false} style={{overflow:'auto', height:'700px'}}>
                { products.filter((products) => user.email == products.userid)
                        .map((p) => <SmallerCardApp product={p}/>  ) }
                    </Card>
                </div>

            </>
        );
}

export default UsersPost;