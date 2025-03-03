import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { ContextDemo } from './Components/Context-Demo.js';
import { Level1 } from './Components/Demo.jsx';
import { Home } from './home/home.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';
import { DataBinding } from './Components/data-binding/data-binding.jsx';
import { ObjectBinding } from './Components/data-binding/object-binding.jsx';
import { TableBinding } from './Components/data-binding/table-binding.jsx';
import { NestedBinding } from './Components/data-binding/nested-binding.jsx';
import { DateBinding } from './Components/data-binding/date-binding.jsx';
import { ToDo } from './To-Do.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDo/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
