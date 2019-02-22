import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from './serviceWorker';
import  App  from './App/App';
import store from './store';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

registerServiceWorker();
