import React from "react";
import Swirl from "../components/Swirl";
import SocialLinks from "../components/SocialLinks";

import "./Pages.css";

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Contact Lily</h1>
                    <Swirl />
                </div>
                <div className="contact">
                    <div>
                        <div>
                            <b>Email: lilythongnuam@gmail.com</b>
                        </div>
                        <div>
                            <b>Phone: (608)-575-8565</b>
                        </div>
                        <div>
                            <b>Instagram: @lilythongnuam</b>
                        </div>
                    </div>
                    <img src="/images/Lily/Headshot_1.jpg" alt="Lily Thongnuam" />
                    <div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
