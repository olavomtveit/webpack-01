import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import moment from 'moment';
import './sass/styles.scss';

const timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(timeNow);

ReactDOM.render(<App />, document.getElementById("app"));