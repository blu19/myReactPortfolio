import React, { Fragment, Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import ProjectList from './components/Projects/ProjectList';
import ProjectInfo from './components/Projects/ProjectInfo';
import Skills from './components/Skills';
import Footer from './components/Footer';
import portfolioData from './data/portfolio';
import Modal from './components/Modal/Modal';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
