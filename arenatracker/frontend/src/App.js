import React, { Component } from 'react';
import {Router, Route} from "react-router-dom";
//import logo from './logo.svg';
import {ThemeContext, themes} from "./ThemeProvider";
import Login from "./Views/Login";
import SignUp from "./Views/SignUp";
import Home from "./Views/Home/Home";
import './App.css';
import "./Components/Header/Header.css"

class App extends Component {
constructor() {
  super();

  this.state = {
    user: {},
    form: "",
    //theme: themes.default
           
  };

  this.toggleTheme = this.toggleTheme.bind(this);
  this.handleFilter = this.handleFilter.bind(this);
  //this.submitForm = this.submitForm.bind(this);
  //this.getForm = this.getForm.bind(this);

}

toggleTheme() {
  this.setState(state => ({
    theme: state.theme === themes.horde ? themes.ally : themes.default
  }))
}

handleFilter(e) {
  const {value} = e.target;
  this.setState({
    filter: value
  })
}



render() {
  const { user, filter, theme} = this.state;
  // {theUsForm, Header}
  const themeChange = {
    theme,
    toggleTheme: this.toggleTheme
  };
  return(
    <ThemeContext.Provider value={themeChange}>
      <Router>
        <>
          <Route exact path="/" 
            render={() => (
              <Home 
                user={user}
                filter={filter}
                handleFilter={this.handleFilter}
                submitForm={this.submitForm}
              />
            )}
          />
          <Route exact path="/Login" Component={Login} />
          <Route exact path="/Signup" Component={SignUp} />
          </>
      </Router>
    </ThemeContext.Provider>
    );
  }
}

export default App;
