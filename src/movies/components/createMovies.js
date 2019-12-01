import React,{Component} from 'react';
import {action} from '../actions/action'
import { Link,withRouter } from "react-router-dom";
import {connect} from 'react-redux'


class CreateMovies extends Component{

    componentDidMount(){
        console.log("this.props****", this.props);
    }
addMovieHandler=(e)=>{
    e.preventDefault();
let title=this.refs.title.value;
let date=this.refs.date.value;
let selectLanguage=this.refs.selectLanguage.value;
let selectResult=this.refs.selectResult.value;
    let key=Math.random();
    this.props.dispatch(action({title:title,date:date,selectLanguage:selectLanguage,selectResult:selectResult,key:key}));
    
}
    render(){
     
        
//        console.log("this is data prps!!!",this.props.data)
        return(
        <div>
            
            <h2>Create Movies</h2>
            <button>  <Link to="/showAllMovies" > Show All Movie </Link></button>
            <div style={{margin:'20px 20px 20px 20px'}}>movie's title:
            <input style={{border:'2px solid red'}} type="text" ref="title"/>
            </div>
            <div style={{margin:'20px 20px 20px 20px'}}>
            Date of Release:
            <input style={{border:'2px solid red'}} type="date" ref="date"/>
            </div>
            <div style={{margin:'20px 20px 20px 20px'}}>
            Language:
            <select style={{border:'2px solid red'}} ref="selectLanguage">
                <option value="english">English</option>
                <option value="urdu">Urdu</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="chines">Chines</option>
                </select>
            </div>
              <div style={{margin:'20px 20px 20px 20px'}}>
            Movie's Result:
            <select style={{border:'2px solid red'}} ref="selectResult">
                <option value="1080">1080px</option>
                <option value="720">720px</option>
                <option value="480">480px</option>
                <option value="320">320px</option>
                <option value="mk">mk</option>
                </select>
            </div>
            <div>
         
            <button onClick={this.addMovieHandler}>   Add Movie </button>
           
           
            </div>
            </div>
        )
    }
}
//let mapStateToProps=(store)=>{
//     console.log("i am invoked mapstatetoprops!!!",store)
//  
//    return{
//        data:store.movieReducer
//    }
//}
let mapDispatchToProps = store=>{
    console.log("i am invoked store!!!",store)
    return {data:store}
    
}
export default connect(mapDispatchToProps)(withRouter(CreateMovies));