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

const App = () => {
    return (
        <Router>

            <Layout>
                <HeaderApp/>
                <Switch>
                    <Route path="/chat" exact component={chat}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Layout>

        </Router>
    );
}

export default App;