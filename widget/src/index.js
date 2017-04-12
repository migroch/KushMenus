// index.js
// Entry js file
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

// Render app on root element
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
