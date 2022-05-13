import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import  applicationsReducer  from "./reducers/applicationsReducer";
import "./styles.css"

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={createStore(applicationsReducer)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
);
