import React from "react";
import Resource from "./Resource"
import {connect} from 'react-redux'
import { increment, changeQuery } from '../actions'





const ResourceList = (props) => {
    
       const handleChange = (e) => {
            console.log(props)
            props.changeQuery(e.target.value,props.resourcesList.list)     
        }
            
            
        
    
       const handleClick = ()  => {
            props.increment(props.count);
        };

        
      const   renderPosts= ()  => {
            console.log(props)
            const display = props.search.searchList.map(resource => {
            return <Resource resource={resource} key={resource.id}  />;
            });
            
            return display
        };
        
    
        return(
            <div>
            <div style={myStyles.searchBar}>
                <input style={myStyles.input} 
                type="text" placeholder="🔍 Search  By Title or Summary" 
                value={props.search.query} 
                onChange={handleChange} />
            </div>
            <div className="resourceList"> {renderPosts()}</div>
            </div>
           
            
        )
    
            

}

const myStyles = {
    searchBar: {
        flexDirection : "row",
        flex: 1,
        marginRight : "30%",
        marginLeft : "30%",
        marginBottom:'1.5rem',
    },
    input: {
        width: "80%",
        height: 32,
        fontSize: 20,
        marginBottom: 8,
    },
}
        
const mapStoreToProps = (store) => {
    return {
        count: store.resources.count,
        resourcesList: store.resources,
        search: store.searchReducer
    }
}
    


export default connect(mapStoreToProps, {
    increment,
    changeQuery
    
})(ResourceList);