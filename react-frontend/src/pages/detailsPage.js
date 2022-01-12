import React, {Component} from "react";
import {Button, Col, Layout, notification, Row} from "antd";
import Carusel from "../components/ProductDetailsComponents/carousel";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Paragraph from "antd/es/typography/Paragraph";
import {HeartTwoTone, MessageTwoTone} from "@ant-design/icons";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class DetailsPage extends Component {

    render() {
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
                <Layout style={{height: "100vh"}}>
                    <Row justify="space-around" align="middle">
                        <Col span={10} style={{padding: "40px"}}>
                            <Carusel/>
                        </Col>
                        <Col style={{padding: "40px", marginBottom: "15%"}} span={10}>
                            <Row> <Title>Title goes here</Title> </Row>
                            <Row>
                                <Paragraph>
                                    Description Goes here:
                                    Ant Design, a design language for background applications, is refined by Ant UED
                                    Team.
                                    Ant
                                    Design, a design language for background applications, is refined by Ant UED Team.
                                    Ant
                                    Design, a design language for background applications, is refined by Ant UED Team.
                                    Ant
                                    Design, a design language for background applications, is refined by Ant UED Team.
                                    Ant
                                    Design, a design language for background applications, is refined by Ant UED Team.
                                    Ant
                                    Design, a design language for background applications, is refined by Ant UED Team.
                                </Paragraph>
                            </Row>

                            {this.props.auth.isLoggedIn ? userLinks : guestLinks}

                            <Row justify="end">
                                <Text type="secondary">Owner Name, owner.email@gmail.com</Text>
                            </Row>
                            <Row justify="end">
                                <Text type="secondary">2022-01-12 18:56</Text>
                            </Row>

                        </Col>
                    </Row>

                </Layout>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};


export default connect(mapStateToProps)(DetailsPage);

