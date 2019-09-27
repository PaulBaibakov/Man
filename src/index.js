import React from 'react';
import { render } from 'react-dom';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import ProdMain from './components/ProdMain';
import LoginForm from './components/Login';
import ComboBox from './components/ComboBoxJSON';
//import './components/SQL/RouteSQL';
//import './components/SQL/TuneSQL.ini';

//console.log("hi11111111111111111111111111111111111112");
render(<ProdMain />, document.getElementById('root'));
//render(<LoginForm />, document.getElementById('root'))
//render(<ComboBox />, document.getElementById('root'))
