import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Choreography from "./pages/Choreography";
import Dance from "./pages/Dance";
import Gallery from "./pages/Gallery";
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
                        <img src="/images/Opener.jpg" />
                        <img src="/images/Opener-mobile.jpg" />
                        <img src="/images/1-4.jpeg" />
                        <img src="/images/1-5.jpeg" />
                        <img src="/images/1-7.jpeg" />
                        <img src="/images/1-8.jpeg" />
                        <img src="/images/1-9.jpeg" />
                        <img src="/images/1-5-mobile.jpeg" />
                        <img src="/images/1-7-mobile.jpeg" />
                        <img src="/images/1-8-mobile.jpeg" />
                        <img src="/images/1-9-mobile.jpeg" />
                    </span>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/choreography" component={Choreography} />
                    <Route path="/dance" component={Dance} />
                    <Route path="/gallery" component={Gallery} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
