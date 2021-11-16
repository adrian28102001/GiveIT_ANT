import React from 'react';
import './App.less';
import HeaderApp from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import chat from "./pages/Chat";
import Home from "./pages/Home";
import {Layout} from "antd";
import Add_announcement from "./pages/Add_announcement";
import MyProfile from "./components/MyProfile/MyProfile";
import SiderApp from "./components/Sider";
import Register from "./pages/RegisterPage";


const App = () => {
    return (
        <Router>
            <Layout>
                <HeaderApp/>
                <Layout>
                    <SiderApp/>
                <Switch>
                    <Route path="/chat"  component={chat}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/add_announcement"  component={Add_announcement}/>
                    <Route path="/register"  component={Register}/>
                    <Route path="/MyProfile"  component={MyProfile}/>
                </Switch>
                </Layout>
            </Layout>

        </Router>
    );
}

export default App;