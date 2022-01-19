import {Button, Card} from 'antd';
import axios from "axios";
import React, { useEffect, useState} from "react";
import SmallerCardApp from "../smallerCardApp";



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

    //Delete post:
    const deleteHandler =  (id, event) => {
        axios.delete(`http://localhost:8080/posts/${id}`) .then(res => {
            const products2 = products.filter(item => item.id !== id);
            setProducts( products2 );
        });
    }

        return (
            <>
                <div className="site-card-border-less-wrapper">
                    <Card title="Postarile mele" bordered={false} style={{overflow:'auto', height:'700px'}}>
                { products.filter((products) => user.email == products.userid)
                    .map((p) =>
                        <>
                            <SmallerCardApp product={p}/>
                            <div>
                                <Button onClick={(e) => deleteHandler(p.id, e)}
                                        type="primary" danger
                                        style={{margin: '10px', marginLeft:"7%"}}>
                                    Delete
                                </Button>
                            </div>
                        </>)
                }
                    </Card>
                </div>

            </>
        );
}

export default UsersPost;