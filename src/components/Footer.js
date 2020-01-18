import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SocialLinks from "../components/SocialLinks";

import "./Footer.css";

const routes = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Dance",
        link: "/dance"
    },
    {
        name: "Choreography",
        link: "/choreography"
    },
    {
        name: "Contact",
        link: "/contact"
    }
];

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top-shadow" style={{ position: "absolute", zIndex: "100" }}>
                    <div />
                </div>
                <div className="footer-logo">
                    <Link to="/">
                        <b>Lily Thongnuam</b>
                    </Link>
                    <div className="footer-links">
                        <SocialLinks extras={true} />
                    </div>
                </div>
                <div className="footer-text">
                    {routes.map(route => (
                        <div key={route.name}>
                            <Link to={route.link}>{route.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="footer-button">
                    <Button component={GoToContact} size="large">
                        Contact Lily
                    </Button>
                </div>
            </div>
        );
    }
}

const GoToContact = props => <Link to="/contact" {...props} />;

export default Footer;
