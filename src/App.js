import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import BlogList from './pages/BlogList';
import Connect from './pages/Connect';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Subscribe from './pages/Subscribe';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <header>
            <NavBar />
          </header>
          <main>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/blogPage/:name' component={BlogPage} />
              <Route path='/blogList' component={BlogList} />
              <Route path='/connect' component={Connect} />
              <Route path='/resources' component={Resources} />
              <Route path='/subscribe' component={Subscribe} />
            </Switch>
          </main>
          <footer>
            <p>website for erin</p>
          </footer>
        </body>
      </Router>
    );
  }
}

export default App;
