import './App.css';
import React from 'react';
import Profile from './Profile';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    Shows:true
     }
  }
  
 
        
  render() { 
   const myFunction =()=> {
      this.setState({Shows:!this.state.Shows});
   }
    
    return ( 
      <div align="center">
        <h1 style={{textAlign:"center"}}> checkpoint State </h1>
        <button onClick={()=>myFunction()} style={{backgroundColor: "lightgreen"}}>
         {this.state.Shows ? "Hide Profile" : "Show Profile"}  
        </button>
        {this.state.Shows?<Profile/>:null}
      </div> 
    );
    

  }
}
 
export default App;

