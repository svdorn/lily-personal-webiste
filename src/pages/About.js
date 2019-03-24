import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container about-first-frame">
                    <div>About</div>
                    <Swirl />
                </div>
            </div>
        );
    }
}

export default About;
