import React from "react";
import { useState } from "react";
import AboutClient from "./AboutClient";
import Favorites from "./Favorites";


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
                    <h2>Content 3</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                    <p>Sed non ipsum interdum, eleifend lorem tincidunt, consequat nisl. Praesent
                        ac sem faucibus, vulputate tortor consectetur, scelerisque arcu. Interdum
                        et malesuada fames ac ante ipsum primis in faucibus. Praesent tincidunt
                        odio quis erat posuere eleifend. Praesent sit amet nulla aliquet, pharetra nibh
                        gravida, sagittis tellus. Morbi malesuada risus vitae vestibulum finibus.
                        Fusce massa est, consectetur vitae dapibus eu, vehicula eget justo. Etiam
                        scelerisque tristique ullamcorper. Sed malesuada tellus non mi pellentesque cursus.
                        Sed sodales dignissim elit non imperdiet. Pellentesque ipsum ipsum, faucibus id semper
                        et, finibus in ex.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Tabs;