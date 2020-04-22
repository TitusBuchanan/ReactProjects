import React from 'react'

const Resource = ({resource}) => {
   
    return(
        <div className={'box'}>
            <h2>{resource.title}</h2>
            <p>{resource.author}</p>
            <p>Published On: {resource.datePublished}</p>
            {resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
            {/*conditonal ? true code : false code */}
            <p>Comments: {resource.comments.length}</p>
            <p>{resource.link}</p>
            <p>{resource.categories}</p>
        </div>

    )
}

export default Resource 