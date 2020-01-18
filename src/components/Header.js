import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SocialLinks from "../components/SocialLinks";
import { withRouter } from "react-router";

import "./Header.css";

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
        name: "Gallery",
        link: "/gallery"
    },
    {
        name: "Contact",
        link: "/contact"
    }
];

class Header extends Component {
    constructor(props) {
        super(props);

        // set the initial state
        this.state = {
            open: null,
            selectedIndex: this.getSelectedIndex(props.location)
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            // check new index
            const selectedIndex = this.getSelectedIndex(nextProps.location);
            // set the index if it isn't the current index
            if (selectedIndex !== this.state.selectedIndex) {
                this.setState({ selectedIndex });
            }
        }
    }

    getSelectedIndex = location => {
        let index = -1;

        if (!location) return index;

        switch (location.pathname) {
            case "/about":
                index = 0;
                break;
            case "/dance":
                index = 1;
                break;
            case "/choreography":
                index = 2;
                break;
            case "/gallery":
                index = 3;
                break;
            case "/contact":
                index = 4;
                break;
            default:
                index = -1;
                break;
        }

        return index;
    };

    handleClick = event => {
        this.setState({ open: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ open: null });
    };

    makeDesktopMenu() {
        const { selectedIndex } = this.state;

        return (
            <div className="desktop-menu">
                {routes.map((route, index) => {
                    let selected = "";
                    if (selectedIndex === index) {
                        selected = "selected";
                    }

                    return (
                        <Link to={route.link} key={route.name}>
                            <div className={selected}>
                                <b>{route.name}</b>
                            </div>
                        </Link>
                    );
                })}
                <div>
                    <SocialLinks extras={false} />
                </div>
            </div>
        );
    }

    makeMobileMenu() {
        return (
            <div className="mobile-menu">
                <IconButton color="inherit" onClick={this.handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="mobile-menu"
                    anchorEl={this.state.open}
                    open={Boolean(this.state.open)}
                    onClose={this.handleClose}
                >
                    {routes.map((route, index) => (
                        <Link to={route.link} key={route.name}>
                            <MenuItem
                                selected={index === this.state.selectedIndex}
                                onClick={this.handleClose}
                            >
                                <b>{route.name}</b>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </div>
        );
    }

    render() {
        return (
            <div className="menu">
                <div>
                    <Link to="/">
                        <img src="/images/Title.png" className="title" alt="Lily Thongnuam" />
                    </Link>
                </div>
                {this.makeDesktopMenu()}
                {this.makeMobileMenu()}
            </div>
        );
    }
}

Header = withRouter(Header);

export default Header;
