import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import 'react-nice-dates/build/style.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Provider store={store}>
<App />
</Provider>

,document.getElementById("root"));
