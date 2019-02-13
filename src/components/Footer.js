import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import "./Footer.css";

const routes = [
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Menu",
        link: "/menu"
    },
    {
        name: "Contact Us",
        link: "/contact"
    }
];

class Footer extends Component {

    scrollToTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="footer">
                <div className="top-shadow" style={{ position: "absolute", zIndex: "100" }}>
                    <div />
                </div>
                <div className="footer-logo">
                    <Link to="/" onClick={this.scrollToTop}><b>TrustLease</b></Link>
                </div>
                <div className="footer-text">
                    {routes.map((route) => (
                        <div key={route.name}>
                            <Link to={route.link} onClick={this.scrollToTop}>{route.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="footer-button">
                    <Button size="large">
                        <Link to="/menu">See the Menu</Link>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Footer;
