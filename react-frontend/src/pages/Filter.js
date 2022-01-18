import CardApp from "../components/CardApp";
import {Empty, Row, Space} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

const Filter = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts").then(({data}) => setProducts(data))
    }, [])

    const menuKey = localStorage.getItem("menuKey");

    const noProduct = (
        <Space align={"center"} style={{height:"78vh"}}>
            <Row justify={"center"}>
                <Empty/>
            </Row>
            <Row justify={"center"}>
                <Text type={"secondary"}>Nu sunt produse in categoria: {menuKey}</Text>
            </Row>
        </Space>

    )

    const allProduct = (
        <>
            <Row style={{padding: '50px', marginLeft: 100}}>
            {
                menuKey == "tot"
                    ?
                    products.map((p) => <CardApp product={p}/>)
                    :
                    noProduct
            }
            </Row>
        </>
    );

    const yesProduct = (
        <>
            <Row justify={"center"}>
                <Title level={4}>Vezi produsele din categoria: {menuKey}</Title>
            </Row>
            <Row style={{padding: '50px', marginLeft: 100}}>
                {
                        products.filter((products) => products.category == menuKey)
                            .map((p) => <CardApp product={p}/>)
                }
            </Row>
        </>
    )

    return (
        <>

            {
                products.filter((products) => products.category === localStorage.getItem("menuKey")).length === 0
                    ?
                    allProduct : yesProduct
            }

        </>
    )
}
export default Filter;