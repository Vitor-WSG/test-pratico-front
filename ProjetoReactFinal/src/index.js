import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './users.css'
import App from './App';
// import { Header } from './Header';
// import PersonList from './PersonList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Header/> */}
    {/* <PersonList/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
