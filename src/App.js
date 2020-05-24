import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Nav';
import Portfolio from './components/Portfolio';
import Personal from './components/Personal';
import ResumeCV from './components/ResumeCV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/personal' component={Personal} />
            <Route exact path='/resume' component={ResumeCV} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/footer' component={Footer} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
}

export default App;