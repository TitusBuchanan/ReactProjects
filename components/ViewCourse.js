import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../common/Button'

class  ViewCourse extends Component { 
    state = {
        showComments: false,
    };
    handleClick = () => {
        this.setState({
          showComments: !this.state.showComments,
        });
      };
        //Function that renders whenever the onClick is triggered 
      renderComments = (course) => {
          return course.comments.map(comment => {
            return (
                <div className='viewbox'>
                    <h3>User:{comment.user}</h3>
                    <h3>Comment: {comment.text}</h3>
                </div>
            )
          });
        };
       
        renderStars = (course) => {
            const rating = course.rating;
            let stars = "";
                //loops how many stars we have in our rating 
            for(let i = 0 ; i < rating; i++) {
                stars += "⭑ ";
            };
            return stars
        };


        renderYoutube = (course) => {
            if (course.link.indexOf("youtube") >= 0) {
                const videoIdIndex = course.link.indexOf("?v=");
                const videoId = course.link.substring(videoIdIndex + 3);
                console.log(videoId);
                return(
                    <iframe
                    title="video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    ></iframe>
                )
            };
        };
        
        



    render() {
    
        const { course } = this.props
        //const {courseId} = useParams();
        const {courseId} = this.props.match.params;
        return (
            <div className={'viewBox'}>
                <h3>Poster Name: {course.posterName} id: {courseId}</h3>
                <h3>Resource Author: {course.resourceAuthor} </h3>
                <h3>Author Skill Level: {course.authorSkillLevel} </h3>
                <h3>Title: {course.title} </h3>
                <h3>Cohort: {course.cohort}  </h3>
                <h3>Categories: {course.categories} </h3>
                <h3>Summary: {course.summary} </h3>
                <h3>Resource Type: {course.resourceType} </h3>
                <h3>Link: {this.renderYoutube(course)} </h3>
                <h3>Date Published: {course.datePublished} </h3>
                <h3>Video Length:{course.videoLength} </h3>
                <h3>Time to Complete: {course.timeToComplete} </h3>
                <h3>Course Rating(5 Stars): {this.renderStars(course)} </h3>
                <Button onClick={this.handleClick}>
                    {this.state.showComments ? "Hide Comments" : "Show Comments"}
                </Button>
                {this.state.showComments ? this.renderComments(course): null }

                
                    
                
            </div>
        )
    }
};

                
            
            
            
                
            
            

export default withRouter(ViewCourse);