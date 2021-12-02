import React, {Component} from "react";
import {Header} from "antd/es/layout/layout";
import {Row, Col, Image, Badge, Button, Affix} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import CascadUser from "./CascadUser";
import {connect, useDispatch, useSelector} from "react-redux";
import { logoutUser} from "../service";


class HeaderApp extends Component {

    logout = () => {
        this.props.logoutUser();
    };

    render() {

        const guestLinks = (
            <Link exact to={"/login"}>
                <Button type="primary">
                    Log In
                </Button>
            </Link>
        );

        const userLinks = (
            <>
                <Col offset={14}>
                    <Badge size="small" count={5}>
                        <Link exact to="/chat"><Button size="large" type="default" shape="circle">
                            <MessageOutlined/>
                        </Button></Link>
                    </Badge>
                </Col>

                <Col>
                    <Link exact to={"/"} onClick={this.logout}>
                        <Button type="primary">
                            Logout
                        </Button>
                    </Link>
                </Col>

                <Col style={{marginleft: '7px'}}>
                    <Link exact to="/MyProfile"><CascadUser/></Link>
                </Col>
            </>
        );


        return (
            <div className={'MyHeader'}>
                <Affix offsetTop={0}>
                    <Header style={{
                        width: '100%', background: 'rgb(230, 234, 255)', padding: '0px 0px', height: '60px'
                    }}>

                        <Row>
                            <Col offset={1}>
                                <Link exact to={'/'}><Image.PreviewGroup>
                                    <Image width={65} preview={false} style={{padding: '5px 5px'}}
                                           src="https://i.ibb.co/845rwyF/output-onlinepngtools-4.png"/>
                                </Image.PreviewGroup></Link>
                            </Col>
                            <Col>
                                <Link exact to={'/'}><h1 className={'GiveIt'}>GiveIt</h1></Link>
                            </Col>

                            {this.props.auth.isLoggedIn ? userLinks : guestLinks}

                        </Row>
                    </Header>
                </Affix>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return{
        logoutUser: () => dispatch(logoutUser())
        // authenticateUse r: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);
