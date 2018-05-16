import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/home/Home';
import Header from './components/Common'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              
            </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
