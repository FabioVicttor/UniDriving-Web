import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppProvider from './hooks';

import Routes from './routes';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
    </Router>
  );
};
