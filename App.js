import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import ResourceList from './components/ResourceList';
import Navbar from "./components/Navbar"
import ResourceForm from './components/ResourceForm'
import ViewCourse from './components/ViewCourse'







const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ResourceList   />
          </Route>
          <Route path ='/addResource'>
            <ResourceForm  />
          </Route>
          <Route path='/viewCourse/:courseId'>
            <ViewCourse />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>




  );
}
  


  
  
  
  
  
  



  
 

export default App;
 