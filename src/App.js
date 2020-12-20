import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rodape from './Components/rodape';
import Titulo from './Components/titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Titulo text='Login' descricao='Informe os dados abaixo'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rodape/>
    </div>
  );
}

export default App;
