import React from "react";
import Swirl from "../components/Swirl";
import SocialLinks from "../components/SocialLinks";
import TextField from "@material-ui/core/TextField";

import "./Pages.css";

class Contact extends React.Component {
    state = {
        name: "",
        email: ""
    };

    onClick = () => {
        fetch("/api/contact?name=Steve", {
            method: "POST"
        });
    };

    handleNameChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Contact Lily</h1>
                    <Swirl />
                </div>
                <TextField
                    id="outlined-with-placeholder"
                    label="Placeholder"
                    placeholder="Placeholder"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleNameChange("name")}
                />
                <div className="contact">
                    <div>
                        <div onClick={this.onClick}>
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
