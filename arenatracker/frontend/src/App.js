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
   return (
     <div className="App">
      <label>_____________________________________________</label>
       <TheVsForm onSubmit={this.handleSubmit}>      
      </TheVsForm>
      <label>_____________________________________________</label>
       <WinLoss onSubmit={this.handleSubmit}>    
       </WinLoss>
      <label>_____________________________________________</label>
       <TheUsForm onSubmit={this.handleSubmit}>    
       </TheUsForm>
      <label>_____________________________________________</label>
       <TheThemForm onSubmit={this.handleSubmit}>       
       </TheThemForm>
      <label>_____________________________________________</label>
       <PopularChoice>
       </PopularChoice>
      <label>_____________________________________________</label>       
       <Percentages>
       </Percentages>
      <label>_____________________________________________</label>
     </div> 
    );
  }
}

export default App;


// const theBackground = styled.div`
//     background-image: background;
//     border: 1px solid #000;
//     background-size: 100%;
//     background-position: 'center';
//     background-repeat: 'no-repeat';
//     `;
    
    
    // width: 200px;
    // height: 200px;

 
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