import React from 'react'

const Resource = () => {
    const resource = {
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
        videoLength:null,
        timeToComplete:300,
        rating:5,
        comments:[{user:'Joe',text:'Pretty good resource'}]
    }
    return(
        <div className={'box'}>
            <h2>{resource.title}</h2>
            <p>{resource.resourceAuthor}</p>
            <p>{resource.datePublished}</p>
            {   resource.videoLength ? (<p>{resource.videoLength}</p>) : null}
            <p>Comments: {resource.comments.length}</p>
            
        </div>
    )
}

export default Resource