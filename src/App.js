import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Choreography from "./pages/Choreography";
import Dance from "./pages/Dance";
import Home from "./pages/Home";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ScrollToTop from "react-router-scroll-top";

import "./App.css";

const typography = { fontFamily: '"Muli", sans-serif', useNextVariants: true };
const palette = {
    primary: {
        main: "#B0B6CF"
    },
    secondary: {
        main: "#000000"
    }
};

const theme = createMuiTheme({ palette, typography });

const App = () => (
    <Router>
        <ScrollToTop>
            <MuiThemeProvider theme={theme}>
                <Header />

                <div className="App">
                    <span className="hidden-images">
                        <img src="/images/Opener.jpg" alt="Lily Thongnuam" />
                        <img src="/images/Opener-mobile.jpg" alt="Lily Thongnuam" />
                        <img src="/images/1-5.jpeg" alt="Lily Thongnuam" />
                        <img src="/images/1-7.jpeg" alt="Lily Thongnuam" />
                        <img src="/images/1-8.jpeg" alt="Lily Thongnuam" />
                        <img src="/images/1-5-mobile.jpeg" alt="Lily Thongnuam" />
                        <img src="/images/1-7-mobile.jpeg" alt="Lily Thongnuam" />
                        <img src="/images/1-8-mobile.jpeg" alt="Lily Thongnuam" />
                    </span>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/choreography" component={Choreography} />
                    <Route path="/dance" component={Dance} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
