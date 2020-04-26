import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'
import  resources from './mock/resource'

import ResourceForm from './components/ResourceForm'





class App extends Component {
  
  state = {
    resources: [...resources]
  }

  renderPosts= ()  => {
    const display = this.state.resources.map(resource => {
      return <Resource resource={resource} key={resource.title} />;
    });
    
    return display
  }


  render(){
    return (
      <div className="App">
          <div className="header">
            <h1 className="title">Welcome To BrainHive!</h1>
              <div className="navigation">
                <a href="">Add Resource</a>
              </div>
          </div>
        <div className="resourceList"> {this.renderPosts()}</div>
        <ResourceForm />
      </div>


    );
  }
  
}
 

export default App;
 