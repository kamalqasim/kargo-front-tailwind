import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
   <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
