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
import ImageHome from "./pages/ImageHome";
import Philosophy from "./pages/Philosophy";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import ScrollToTop from "react-router-scroll-top";

import "./App.css";

const typography = { fontFamily: '"Muli", sans-serif', useNextVariants: true };
const palette = {
    primary: {
        main: "#C1B7CA"
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
                    <Route path="/" exact component={ImageHome} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/choreography" component={Choreography} />
                    <Route path="/dance" component={Dance} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/philosophy" component={Philosophy} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
