import React from 'react';
import logo from '../img/logoeletro.jpeg';
import '../components/Nav.css';

class Nav extends React.Component {

  render(){
    return(
      <header className="inicio">
        <a href="inicio.html">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        
        <ul className="link">
          <li><a className="App-link" href="../pages/produto/produto.html"
          target="_blank" rel="noopener noreferrer">
          produto React </a> </li>

          <li><a className="App-link" href="../pages/produto/loja.html"
          target="_blank" rel="noopener noreferrer">
          loja React </a> </li>

          <li><a className="App-link" href="../pages/produto/contato.html"
          target="_blank" rel="noopener noreferrer">
          contato React </a> </li>

        </ul>
      </header>
    );
  }
}

  export default Nav;
  