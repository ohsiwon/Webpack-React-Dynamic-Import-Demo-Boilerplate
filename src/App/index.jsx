import '@babel/polyfill';
import 'whatwg-fetch';
import '../styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../Routers';

const render = (module.hot === true) ? ReactDOM.render : ReactDOM.hydrate;
render(<Router />, document.getElementById('root'));
