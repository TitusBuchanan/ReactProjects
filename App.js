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
          <div className="header">
            <h1 className="title">Welcome To BrainHive!</h1>
              <div className="navigation">
                <a href="">Add Post</a>
              </div>
          </div>
        <div className="resourceList"> {this.renderPosts()}</div>
      </div>


    );
  }
  
}
 

export default App;
 