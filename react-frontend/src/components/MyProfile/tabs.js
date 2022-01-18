import React from "react";
import { useState } from "react";
import AboutClient from "./AboutClient";
import Favorites from "./Favorites";
import UsersPost from "./UsersPost";


function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    My Profile
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Favorite Items
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    My Posts
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                   <AboutClient/>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <Favorites/>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <UsersPost/>
                </div>
            </div>
        </div>
    );
}
export default Tabs;