import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import './App.css';

const typography = { fontFamily: '"Muli", sans-serif', useNextVariants: true };
const palette = {
    primary: {
        main: "#607d8b",
    },
    secondary: {
      main: '#000000',
    }
};

const theme = createMuiTheme({ palette, typography });

console.log("theme: ", theme);

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Header />

      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/menu" component={Menu} />
      </div>

      <Footer />
    </MuiThemeProvider>
  </Router>
);

export default App;
