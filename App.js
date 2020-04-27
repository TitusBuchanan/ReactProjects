import React, { Component } from 'react';
import './App.css';
import ResourceList from './components/ResourceList';
import  resources from './mock/resource'
import Navbar from "./components/Navbar"
import ResourceForm from './components/ResourceForm'





class App extends Component {
  
  
  state = {
    resources: [...resources]
  }

    
  addResource = (newResource) => {
    
    this.setState({
      resources: [...this.state.resources, newResource]
    })
  }

  

  


  render(){
    return (
      <div className="App">
         <Navbar />
        <ResourceList resources={this.state.resources}/>
        <ResourceForm addResource={this.addResource}/>
      </div>


    );
  }
  
}
 

export default App;
 