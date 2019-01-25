import React, { Component } from 'react';
import './App.css';
import "./Components/Header/Header.css"
import TheVsForm from './Components/TheForm/Vs/Vs';
import TheUsForm from './Components/TheForm/Us/Us';
import TheThemForm from './Components/TheForm/Them/Them';

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
    value: '',
    //theme: themes.default
           
  };
  
  // this.toggleTheme = this.toggleTheme.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);

}

// toggleTheme() {
//   this.setState(state => ({
//     theme: state.theme === themes.horde ? themes.ally : themes.default
//   }))
// }


handleChange(event) {
  this.setState({value: event.target.value})
}

handleSubmit(event) {
  console.log("form value:" + this.state.value)
  event.preventDefault();
  
}


render() {
   return (
     <div className="App">
       <TheVsForm onSubmit={this.handleSubmit}>
       </TheVsForm>
       <br></br>
       <br></br>
       <br></br>
       <br></br> {/* put the win/loss componenet in here somewhere*/}
       <br></br>
       <br></br>
       <br></br>
       <TheUsForm onSubmit={this.handleSubmit}>
       </TheUsForm>
       <br></br>
       <TheThemForm onSubmit={this.handleSubmit}>
       </TheThemForm>
     </div> 
    );
  }
}

export default App;



 
// <ThemeContext.Provider value={themeChange}>
// <TheVsForm>
// <Router> 
//   <>
//     <Router exact path="/" 
//       render={() => (
//         <Home 
//         user={user}
//         handleSubmit={this.handleSubmit}
//         />
//         )}
//         />
//     <Router exact path="/Login" Component={Login} />
//     <Router exact path="/Signup" Component={SignUp} />
//   </>
// </Router>
// </TheVsForm>   
// </ThemeContext.Provider>