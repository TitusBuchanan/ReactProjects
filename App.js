import React, { Component } from 'react';
import './App.css';
import Resource from './components/Resource'



class App extends Component {
  resources = [
    {
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
      comments:[
        {user:'Joe',text:'Pretty good resource'},
        {user:'Larry',text:'Pretty Pretty Pretty good resource'}
      ]
    },
    {
      posterName: "John F",
      resourceAuthor: "DevEd",
      authorSkillLevel: "Beginner",
      cohort: "8",
      title: "React Tutorial For Beginners",
      categories: ["React", "Beginner"],
      summary:
        "A beginner's guide to React, React State Management, React Router, and Redux. Include 5 app projects.",
      link:
        "https://www.youtube.com/playlist?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      resourceType: "Playlist",
      datePublished: "2019-06-22.00:00:00.000z",
      videoLength: null,
      timeToComplete: 200,
      rating: 4,
      comments: [
        { user: "Tony", text: "That crazy Romanian knows his stuff!" },
        { user: "Sheila", text: "A good intro to React." },
      ],
    },
    {
      posterName: "Jaliyah",
      resourceAuthor: "NetNinja",
      authorSkillLevel: "Advanced",
      cohort: "0",
      title: "React & Redux Complete",
      categories: ["React", "Redux"],
      summary:
        "A good resouce on building a couple react apps with and without redux",
      link: "www.google.com/search?q=NetNinja%20React",
      resourceType: "Playlist",
      datePublished: "2018-09-10.00:00:00.000z",
      videoLength: null,
      timeToComplete: 300,
      rating: 5,
      comments: [
        { user: "Joe", text: "Pretty good resource" },
        { user: "Phen", text: "The best to learn React with." },
      ],
    },
  ];

  renderPosts= ()  => {
    const display = this.resources.map(resource => {
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
 