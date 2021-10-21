import React from 'react';
import './App.less';
import SiderApp from "./components/Sider";
import {Layout} from "antd";
import Header from "./components/Header";


const App = () => (
    <>
        <Layout>
            <SiderApp/>
            <Layout>
                <Header/>
            </Layout>
        </Layout>
    </>
);

export default App;