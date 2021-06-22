//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home'
import About from './components/About'

class App extends React.Component {

  componentDidMount(){
   
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
