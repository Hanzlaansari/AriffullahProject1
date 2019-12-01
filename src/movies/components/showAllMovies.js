import React , {Component} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
class ShoeAllMovies extends Component{
    render(){
        return(
        <div>
            ALL MOVIES
            {this.props.AllMovies ? 
            <div>
            {this.props.AllMovies.map((data,index)=>{
            {console.log(data.key)}
            return(
                
               <Link to={"/detail/" +data.key}>  
            <div key={data.key} style={{border:'2px solid black',height:'auto',width:'300px',margin:'10px 10px 10px 10px'}}>
         <div>Movies Title::{data.title}</div>
            <div>Date of Release::{data.date}</div>
            <div>Language::{data.selectLanguage}</div>
            <div>Display Result::{data.selectResult}</div>
         
               
            </div>
               
          </Link>     
            )
        })}
    </div>
        : <div>No Record Found</div>
}
          
            </div>
        )
    }
}
let mapStateToProps =(state)=>{
    return{
        AllMovies:state
    }
}
export default connect(mapStateToProps)( withRouter(ShoeAllMovies));