import React from 'react';
import {Layout, Menu} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const AppHeader = () => (
    <div className={'MyHeader'}>
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

                    <Menu.Item key="1"><i className={'fa fa-home'}></i>Acasa</Menu.Item>
                    <Menu.Item key="2">Adauga anunt</Menu.Item>
                    <Menu.Item key="3">Despre noi</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="Mobila">
                            <Menu.Item key="1">Dulapuri</Menu.Item>
                            <Menu.Item key="2">Scune/Mese</Menu.Item>
                            <Menu.Item key="3">Paturi/Saltele</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Carti">
                            <Menu.Item key="5">Pentru copii</Menu.Item>
                            <Menu.Item key="6">Drama</Menu.Item>
                            <Menu.Item key="7">Actiune</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Pentru bebelusi">
                            <Menu.Item key="9">Haine</Menu.Item>
                            <Menu.Item key="10">Jucarii</Menu.Item>
                            <Menu.Item key="11">Carucioare</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<NotificationOutlined/>} title="Calculatoare">
                            <Menu.Item key="9">Monitoare</Menu.Item>
                            <Menu.Item key="10">Componente Calculator</Menu.Item>
                            <Menu.Item key="11">Accesorii</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" icon={<NotificationOutlined/>} title="Animalute">
                            <Menu.Item key="12">Caini</Menu.Item>
                            <Menu.Item key="13">Pisici</Menu.Item>
                            <Menu.Item key="14">Papagali</Menu.Item>
                            <Menu.Item key="15">Hamsteri</Menu.Item>
                            <Menu.Item key="16">Broaste Testoase</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" icon={<NotificationOutlined/>} title="Constructii">
                            <Menu.Item key="17">Materiale</Menu.Item>
                            <Menu.Item key="18">Unelte</Menu.Item>
                            <Menu.Item key="19">Echipamente</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" icon={<NotificationOutlined/>} title="Haine">
                            <Menu.Item key="20">Tricouri</Menu.Item>
                            <Menu.Item key="21">Sorti</Menu.Item>
                            <Menu.Item key="22">Pantaloni</Menu.Item>
                            <Menu.Item key="22">Camese</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" icon={<NotificationOutlined/>} title="Sport">
                            <Menu.Item key="20">Haltere</Menu.Item>
                            <Menu.Item key="21">Mingi</Menu.Item>
                            <Menu.Item key="22">Yoga</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Mobila/dulapuri
                    </Content>
                </Layout>
            </Layout>
        </Layout>,
    </div>
);

export default AppHeader;