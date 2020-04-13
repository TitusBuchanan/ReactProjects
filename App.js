import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
import Cliff from './components/Cliff'


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Welcome To BrainHive</h1>
        <Resource resource={this.resource}/>
        
      </div>
    );
  }
  
}
 

export default App;
 