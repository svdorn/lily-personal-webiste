import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SocialLinks from "../components/SocialLinks";
import { withRouter } from "react-router";

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
        console.log("props: ", this.props.location);

        if (this.props.location && this.props.location.pathname === "/") return null;
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
                        <SocialLinks />
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
                    <Button size="large">
                        <Link to="/contact">Contact Lily</Link>
                    </Button>
                </div>
            </div>
        );
    }
}

Footer = withRouter(Footer);

export default Footer;
