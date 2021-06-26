import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import { App } from './App';

const historyInstance = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={historyInstance}>    
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

