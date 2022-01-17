import React from "react";
import {Button, Col, notification, Row} from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import {HeartTwoTone, MessageTwoTone} from "@ant-design/icons";
import {Link, useParams} from "react-router-dom";
import useFetch from "../components/useFetch";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DetailsPage = () => {

    const {id} = useParams();

    const {data, error, isPending} = useFetch(`http://localhost:8080/posts/posts/${id}`);

    const addedToFavorite = type => {
        notification[type]({
            message: 'Adaugat la favorit',
            description:
                'Postarea a fost adaugata cu succes in lista de produse favorite!',
            duration: 3.5
        });
    };

    const userLinks = (
        <Row justify="space-around" style={{marginTop: '3%', marginBottom: '3%'}}>
            <Col>
                <Button onClick={() => addedToFavorite('success')}>
                    <HeartTwoTone key="fav" twoToneColor="#eb2f96"/>
                    Add to Favorite
                </Button>
            </Col>
            <Col>
                <Button><MessageTwoTone key="mess" twoToneColor="#1890ff"/>Chat with owner</Button>
            </Col>
        </Row>
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
            {isPending && <div>Loading...
                </div>
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

            const mapStateToProps = state => {
            return {
            auth: state.auth
        }
        };


            export default DetailsPage;

