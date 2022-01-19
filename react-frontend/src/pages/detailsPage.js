import React, {useEffect, useState} from "react";
import {Button, Col, Layout, notification, Row, Spin} from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import {HeartTwoTone, LoadingOutlined, MessageTwoTone} from "@ant-design/icons";
import {Link, useParams} from "react-router-dom";
import useFetch from "../components/useFetch";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {useSelector} from "react-redux";
import axios from "axios";
import CardApp from "../components/CardApp";
import Person from "./Person";

const DetailsPage = () => {

    const auth = useSelector((state) => state.auth);
    const {id} = useParams();
    const {data, error, isPending} = useFetch(`http://localhost:8080/posts/posts/${id}`);
    const [userVisible, setUserVisible] = useState(false)


    const addedToFavorite = type => {
        notification[type]({
            message: 'Adaugat la favorit',
            description:
                'Postarea a fost adaugata cu succes in lista de produse favorite!',
            duration: 3.5
        });
    };


    const userLinks =  (
        <>
        <Row justify="space-around" style={{marginTop: '3%', marginBottom: '3%'}}>
            <Col>
                <Button onClick={() => addedToFavorite('success')}>
                    <HeartTwoTone key="fav" twoToneColor="#eb2f96"/>
                    Add to Favorite
                </Button>
            </Col>
            <Col>
                <Button onClick={(e)=>{setUserVisible(!userVisible)}}>
                    <MessageTwoTone key="mess" twoToneColor="#1890ff"/>Vezi informatia proprietarului
                </Button>
            </Col>
        </Row>
            <Row>
                {
                userVisible
                    ?
                    <> is Person </>
                    :
                    <></>
            }

            </Row>
        </>
    );

    const guestLinks = (
        <div style={{marginTop: '3%', marginBottom: '3%'}}>
            <Col>
                <Text type="secondary">Conecteaza-te sau Inregistraza-te pentru a contacta autorul anuntului:</Text>
            </Col>
            <Row justify="space-around" style={{marginTop: '1%'}}>
                <Col>
                    <Link exact to={"/login"}>
                        <Button type="link">Conecteaza-te</Button>
                    </Link>
                </Col>
                <Col>
                    <Link exact to={"/register"}>
                        <Button type="link">Inregistreaza-te</Button>
                    </Link>
                </Col>
            </Row>

        </div>
    );

    return (
        <div>
            {isPending &&
                <Row justify="center" style={{height: "100vh"}}>
                    <Col offset={20} span={3} style={{padding: "40px"}}>
                        <div align={"center"}><Spin style={{width:"50vh"}} tip={"loading"}/></div>
                    </Col>
                </Row>
            }
            {error && <div>{error}</div>}

            {data &&
            <Row justify="space-around" align="middle">
                <Col span={10} style={{padding: "40px"}}>
                    <div>
                        <Carousel>
                            <div>
                                <img alt="" src={data.photo}/>
                            </div>
                        </Carousel>
                    </div>

                </Col>
                <Col style={{padding: "40px", marginBottom: "15%"}} span={10}>
                    <Row> <Title>{data.title}</Title> </Row>
                    <Row>
                        <Paragraph>
                            {data.description}
                        </Paragraph>
                    </Row>

                    {auth.isLoggedIn ? userLinks : guestLinks}


                    <Row justify="end">
                        <Text type="secondary">Owner Name, {data.userid}</Text>
                    </Row>
                    <Row justify="end">
                        <Text type="secondary">{data.created}</Text>
                    </Row>

                </Col>
            </Row>
            }


        </div>
    );

}



export default DetailsPage;

