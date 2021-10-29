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
import RegistrationForm from "./pages/RegistrationForm";


const App = () => {
    return (
        <Router>
            <Layout>
                <HeaderApp/>
                <Switch>
                    <Route path="/chat" exact component={chat}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/add_announcement" exact component={Add_announcement}/>
                    <Route path="/register" exact component={RegistrationForm}/>
                </Switch>
            </Layout>

        </Router>
    );
}

export default App;