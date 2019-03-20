import React, { Component } from 'react';
import './App.css';
import "./Components/Header/Header.css"
import {TheVsForm} from './Components/TheForm/Vs';
import {TheUsForm} from './Components/TheForm/Us';
import {TheThemForm} from './Components/TheForm/Them';
import {WinLoss} from './Components/TheForm/WinLoss';
import {Percentages} from './Components/TheForm/Percentages';
import {PopularChoice} from './Components/TheForm/PopularChoice';
import './App.css';

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
   return (    //so maybe i should have used a component. <Wallpaper> or something for styling and wrapped everything. or done like a style sheet thing.
     <div className="background">
        <div className="backgroundLeft">
          <div className="backgroundRight">
            <TheVsForm onSubmit={this.handleSubmit}>      
            </TheVsForm>
            <hr width="20%"></hr>
            <WinLoss onSubmit={this.handleSubmit}>    
            </WinLoss>
            <hr width="20%"></hr>
            <TheUsForm onSubmit={this.handleSubmit}>    
            </TheUsForm>
            <hr width="20%"></hr>
            <TheThemForm onSubmit={this.handleSubmit}>       
            </TheThemForm>
            <hr width="20%"></hr>
            <PopularChoice>
            </PopularChoice>
            <hr width="20%"></hr>    
            <Percentages>
            </Percentages>
            <hr width="20%"></hr>
          </div>
        </div>
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