import React from 'react';
import { Helmet, } from "react-helmet";
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import LeftName from "./components/LeftName";
import './App.css';

function App() {
  return (
    <>
      <LeftName />
    <div className="app-all">
      <Helmet>
        <style>{'body { background-color: black }'}</style>
      </Helmet>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/contact" component={ContactForm} />
      </Switch>

    </div>
    </>
  );
}

export default App;
