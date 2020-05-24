import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/ResumeCV';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;