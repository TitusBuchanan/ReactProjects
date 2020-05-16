import React, { Component } from "react"
import { Redirect } from 'react-router-dom'



class Resource extends Component { 
     
    state = {
        clicked:false
    }


     handleCLick = () => {
        const  {resource , onSelect} = this.props;
       
        this.setState({
            clicked: true,
        });
    };
    
    
    render(){
        const  { resource } = this.props;
    
       
        return(
            <div className={'box'} onClick={this.handleCLick}>
                {this.state.clicked ? <Redirect to={`/viewCourse/${resource.id}`} /> : null}
                <h2 className={'resourceTitle'}>{resource.title}</h2>
                <p>{resource.resourceAuthor}</p>
                <p>Published On: {resource.datePublished}</p>
                {resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
                {/*conditonal ? true code : false code */}
                <p>Comments: {resource.comments.length}</p>
                <p>{resource.link}</p>
                <p>{resource.categories}</p>
            </div>

        );
    };
};

export default Resource 