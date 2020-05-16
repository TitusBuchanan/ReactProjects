import React, {Component} from "react";
import Resource from "./Resource"
import {connect} from 'react-redux'
import { increment } from '../actions'



class ResourceList extends Component {
    state = {
        query:'',
        searchedResources: [...this.props.resourcesList.list]
    }
    
    handleChange = (e) => {
        const query = e.target.value;
        const newList = this.props.resourcesList.list.filter(resource => {
            if (resource.title.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true;
            }
            if(resource.summary.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                return true;
            }
            return false;
        });
        this.setState({
            query,
            searchedResources : newList
        })       
    }
    handleClick = ()  => {
        this.props.increment(this.props.count);
    };

     
    renderPosts= ()  => {
        const display = this.state.searchedResources.map(resource => {
        return <Resource resource={resource} key={resource.id}  />;
        });
        
        return display
    };
    
    render() {
        return(
            <div>
            <div style={myStyles.searchBar}>
                <input style={myStyles.input} type="text" placeholder="🔍 Search  By Title or Summary" onChange={this.handleChange} />
            </div>
            <div className="resourceList"> {this.renderPosts()}</div>
            </div>
           
            
        )
    }
            

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
        
const mapStoreToProps = store => {
    return {
        count: store.resources.count,
        resourcesList: store.resources
    }
}
    


export default connect(mapStoreToProps, {
    increment,
})(ResourceList);