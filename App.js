import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
import  resources from './mock/resource'



class App extends Component {
  

  renderPosts= ()  => {
    const display = resources.map(resource => {
      return <Resource resource={resource} />;
    });
    
    return display
  }


  render(){
    return (
      <div className="App">
        <h1>Welcome To BrainHive</h1> 
       {this.renderPosts()}

      </div>
    );
  }
  
}
 

export default App;
 