import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Index from './page/index';
import Guide from './page/guide';
import Header from './components/header';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <>
    <Header />
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/guide/:query" element={<Guide />} />
      </Routes>
    </Router>
  </>
);

if (module.hot) {
  module.hot.accept();
}