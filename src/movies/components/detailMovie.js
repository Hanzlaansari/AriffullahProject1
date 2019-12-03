import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {detailAction} from '../actions/action';
class DeatilMovie extends Component{
    componentDidMount(){
        let key = this.props.match.params.id;
        let AllMovies=this.props.data;
        this.props.dispatch(detailAction({key:key,movies:AllMovies}))
        console.log(key);
    }
    render(){
        return(
        <div>
            Movie's Detail
            {this.props.data.length>=1 ? 
            <div>
            hi
            {this.props.data.map((data)=>{
            return(
            <div key={data.key} style={{border:'2px solid black',height:'auto',width:'300px',margin:'10px 10px 10px 10px'}}>
         <div>Movies Title::{data.title}</div>
            <div>Date of Release::{data.date}</div>
            <div>Language::{data.selectLanguage}</div>
            <div>Display Result::{data.selectResult}</div>
         
               
            </div>
            )
        })}
        </div>
            
            :<div>Not found</div>
}
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    return {
        data:state
    }
}
export default connect(mapStateToProps)(withRouter(DeatilMovie));