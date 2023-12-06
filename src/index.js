import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Index from './page/index';
import Guide from './page/guide';
import Header from './components/header'

ReactDOM.render(
  <>
    <Header />
    <Router basename="/frontend-roadmap">
      <Route exact path="/" component={Index} />
      <Route path="/guide/:query" component={Guide} />
    </Router>
  </>,
  document.getElementById('app')
);