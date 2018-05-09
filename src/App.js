import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Welcome from './components/Welcome/Welcome';
import Profile from './components/Profile/Profile';
import Ol from './components/Ol/Ol';
import Index from './components/Common/index';
import Cookies from 'universal-cookie';
import 'sweetalert/dist/sweetalert.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      token:false
    }
  }

  redirect(e){
    this.setState({
      redirect: true
    })
  }

  render() {
    var cookie = new Cookies();
    var token = cookie.get('logged_in');
    console.log("token", token)
    console.log(this.props);
    return (
      <BrowserRouter>
      <div className="App">
        {!this.state.redirect ? <Index /> : ""}
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login"   render={()=>(
              token ? (
                <Redirect to="/welcome"/>
              ) : (
                <Signin />
              )
            )} />
            <Route path="/welcome"   render={(props)=>(
              token ? (
                <Welcome {...props}/>
              ) : (
                <Redirect to="/login"/>
              )
            )} />
            <Route path="/profile"   render={()=>(
              token ? (
                < Profile redirect = {this.redirect.bind(this)}/>
              ) : (
                <Redirect to="/login"/>
              )
            )} />
            <Route path="/ol"   render={()=>(
              token ? (
                <Ol/>
              ) : (
                <Redirect to="/login"/>
              )
            )} />
          </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
