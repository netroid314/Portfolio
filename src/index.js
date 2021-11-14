import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Description from './Project_Description'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Link, Switch } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>          
        <Switch>           
          <Route exact path="/desc" component={Description}/>
          <Route exact path="/" component={App2}/> 
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
