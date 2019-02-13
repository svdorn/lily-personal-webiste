import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from "react-router";

import "./Header.css";

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
                this.setState({ selectedIndex })
            }
        }
    }

    getSelectedIndex = (location) => {
        let index = -1;

        if (!location) return index;

        switch(location.pathname) {
            case "/about":
                index = 0;
                break;
            case "/menu":
                index = 1;
                break;
            case "/contact":
                index = 2;
                break;
            default:
                index = -1;
                break;
        }

        return index;
    }

    scrollToTop() {
        window.scrollTo(0,0);
    }

    handleClick = event => {
        this.setState({ open: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ open: null });
    };

    makeDesktopMenu() {
        return (
            <div className="desktop-menu">
                {routes.map((route, index) => (
                    <div key={route.name}>
                        <Link to={route.link} onClick={this.scrollToTop}>{route.name}</Link>
                    </div>
                ))}
            </div>
        );
    }

    makeMobileMenu() {
        return (
            <div className="mobile-menu">
                <IconButton color="inherit" onClick={this.handleClick}>
                    <MenuIcon/>
                </IconButton>
                <Menu
                  id="mobile-menu"
                  anchorEl={this.state.open}
                  open={Boolean(this.state.open)}
                  onClose={this.handleClose}
                >
                    {routes.map((route, index) => (
                        <Link to={route.link} onClick={this.scrollToTop} key={route.name}>
                            <MenuItem
                              selected={index === this.state.selectedIndex}
                              onClick={this.handleClose}
                            >
                              {route.name}
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
                    <Link to="/" onClick={this.scrollToTop}><b>Mickies Dairy Bar</b></Link>
                </div>
                { this.makeDesktopMenu() }
                { this.makeMobileMenu() }
            </div>
        );
    }
}

Header = withRouter(Header);

export default Header;
