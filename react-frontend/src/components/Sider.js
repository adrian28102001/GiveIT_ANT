import React, {Component} from "react";
import {Button, Layout, Menu} from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const {Sider} = Layout;

class SiderApp extends Component {
    render() {
        const userLinks = (
            <div style={{padding: '40px 60px'}}>
                <Link exact to="/add_announcement"><Button type="primary" ghost>
                    Creaza un anunt
                </Button></Link>
            </div>

        );

        const guestLinks = (
            <div style={{padding: '40px 60px'}}>
                <Link exact to="/login"><Button type="primary" ghost>
                    Creaza un anunt
                </Button></Link>
            </div>
        );

        const handleClick = e => {
            localStorage.setItem("menuKey", e.key);
            this.props.history.push('/');
            console.log(e.key)
        };

        return (
            <div className={'Sider'}>
                <Sider className="site-layout-background" width={200}>

                    <Menu
                        onClick={handleClick}
                        mode="inline"
                        style={{
                            height: '92vh',
                            position: 'fixed',
                            left: 0,
                            width: '250px',
                        }}>

                        {this.props.auth.isLoggedIn ? userLinks : guestLinks}

                        <Menu.Item key=" ">Toate Produsele</Menu.Item>
                        <Menu.Item key="Mobila si interior">Mobila si interior</Menu.Item>
                        <Menu.Item key="Haine, incaltaminte, accesorii">Haine, incaltaminte, accesorii</Menu.Item>
                        <Menu.Item key="Gadget-uri">Gadget-uri</Menu.Item>
                        <Menu.Item key="Sport, sanatate, frumusete">Sport, sanatate, frumusete</Menu.Item>
                        <Menu.Item key="Totul pentru copii">Totul pentru copii</Menu.Item>
                        <Menu.Item key="Animale de companie">Animale de companie</Menu.Item>
                        <Menu.Item key="Plante">Plante</Menu.Item>
                        <Menu.Item key="Carti, manuale">Carti, manuale</Menu.Item>
                        <Menu.Item key="Totul pentru casa">Totul pentru casa</Menu.Item>
                        <Menu.Item key="Instrumente muzicale">Instrumente muzicale</Menu.Item>
                        <Menu.Item key="Instrumente, constructie">Instrumente, constructie</Menu.Item>

                    </Menu>

                </Sider>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(withRouter(SiderApp));