import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ResourceList from './components/ResourceList';
import  resources from './mock/resource'
import Navbar from "./components/Navbar"
import ResourceForm from './components/ResourceForm'
import ViewCourse from './components/ViewCourse'






class App extends Component {
  
  
  state = {
    resources: [...resources],
    selected: 1
  }

    
  addResource = (newResource) => {
    newResource.id= this.state.resources[this.state.resources.length-1].id + 1
    this.setState({
      ...this.state,
      resources: [...this.state.resources, newResource]
    })
  }

  handleSelect = (id) => {
    console.log('clicked', id);
    this.setState({
      ...this.state,
      selected:id
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <ResourceList resources={this.state.resources} onSelect={this.handleSelect} />
            </Route>
            <Route path ='/addResource'>
              <ResourceForm addResource={this.addResource} />
            </Route>
            <Route path='/viewCourse/:courseId'>
              <ViewCourse course={this.state.resources[this.state.selected - 1]}/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>




    );
  }
  


  
}
 

export default App;
 