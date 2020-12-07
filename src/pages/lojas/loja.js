import React from 'react';
import ReactDOM from 'react-dom';
import HeaderLoja from '../../components/HeaderLoja';
import Nav from '../../components/Nav';
import reportWebVitals from '../../reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <HeaderLoja/>
  </React.StrictMode>,
  document.getElementById('loja')
);

reportWebVitals();
