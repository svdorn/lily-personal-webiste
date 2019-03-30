import React from "react";
import Button from "@material-ui/core/Button";
import Swirl from "../components/Swirl";
import SocialLinks from "../components/SocialLinks";
import TextField from "@material-ui/core/TextField";

import "./Pages.css";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    handleClick = () => {
        const { name, email, subject, message } = this.state;
        fetch(`/api/contact?name=${name}&email=${email}&subject=${subject}&message=${message}`, {
            method: "POST"
        });
    };

    handleNameChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleChange = name => event => {
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
                <div className="contact-form">
                    <div>
                        <img src="/images/Lily/Headshot_1.jpg" alt="Lily Thongnuam" />
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field"
                            label="Name"
                            variant="outlined"
                            value={this.state.name}
                            onChange={this.handleChange("name")}
                        />
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field"
                            label="Email"
                            variant="outlined"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field"
                            label="Subject"
                            variant="outlined"
                            value={this.state.subject}
                            onChange={this.handleChange("subject")}
                        />
                        <TextField
                            id="outlined-with-placeholder"
                            className="text-field-multiline"
                            rows="4"
                            label="Message"
                            variant="outlined"
                            multiline
                            value={this.state.message}
                            onChange={this.handleChange("message")}
                        />
                        <div className="form-button-container">
                            <Button className="form-button" onClick={this.handleClick} size="large">
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
