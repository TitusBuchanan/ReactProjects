import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'



class App extends Component {
   resource = {
    posterName:'Cliff',
    resourceAuthor:'NetNinja',
    authorSkillLevel:'Advanced',
    cohort:'0',
    title:'React & Redux Complete',
    categories:['React','Redux'],
    summary:'a good resource on building a couple of react apps with and without redux',
    link:'www.google.com/search?=NetNinja%20React',
    resourceType:'Playlist',
    datePublished:'2018-09-10.00:00:00.000z',
    videoLength:10,
    timeToComplete:300,
    rating:5,
    comments:[{user:'Joe',text:'Pretty good resource'},{user:'Larry',text:'Pretty Pretty Pretty good resource'}]
}
  render(){
    return (
      <div className="App">
        <h1>Welcome To BrainHive</h1> 
        <Resource resource={this.resource} />
        <Resource resource={this.resource}/>
        <Resource resource={this.resource}/>

      </div>
    );
  }
  
}
 

export default App;
 