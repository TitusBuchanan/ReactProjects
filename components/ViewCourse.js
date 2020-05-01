import React from 'react'
import {useParams} from 'react-router-dom'
import { Button } from 'react-materialize';

const ViewCourse = (props) => {
    const { course } = props
    const {courseId} = useParams();
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
            <h3>Link: {course.link} </h3>
            <h3>Date Published: {course.datePublished} </h3>
            <h3>Video Length:{course.videoLength} </h3>
            <h3>Time to Complete: {course.timeToComplete} </h3>
            <h3>Course Rating(5 Stars):{course.rating} </h3>
            <Button>
                Submit
            </Button>
        </div>
        
           
        
            
        
        
    )
}

export default ViewCourse;