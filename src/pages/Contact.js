import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
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

    handleSubmit = () => {
        document.getElementById("form-contact").submit();
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
                    <h1 className="header">Let{"'"}s Connect</h1>
                    <Swirl />
                </div>
                <div className="contact-header">
                    <b>Submit bookings, inquiries, and messages here!</b>
                </div>
                <div className="contact-form">
                    <div>
                        <img src="/images/Lily/Headshot_1.jpg" alt="Lily Thongnuam" />
                        <div className="contact-social-links">
                            <SocialLinks extras={true} />
                        </div>
                    </div>
                    <div>
                        <form
                            id="form-contact"
                            action="https://formspree.io/lilythongnuam@gmail.com"
                            method="POST"
                        >
                            <TextField
                                id="outlined-with-placeholder"
                                className="text-field"
                                label="Name"
                                variant="outlined"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange("name")}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                className="text-field"
                                label="Email"
                                type="email"
                                name="email"
                                variant="outlined"
                                value={this.state.email}
                                onChange={this.handleChange("email")}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                className="text-field"
                                label="Subject"
                                type="text"
                                name="subject"
                                variant="outlined"
                                value={this.state.subject}
                                onChange={this.handleChange("subject")}
                            />
                            <TextField
                                id="outlined-with-placeholder"
                                className="text-field-multiline"
                                rows="4"
                                label="Message"
                                type="text"
                                name="message"
                                variant="outlined"
                                multiline
                                value={this.state.message}
                                onChange={this.handleChange("message")}
                            />
                            <div className="form-button-container">
                                <Button
                                    className="form-button"
                                    onClick={this.handleSubmit}
                                    size="large"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
