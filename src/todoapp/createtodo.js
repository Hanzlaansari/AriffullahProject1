import React , {Component} from 'react'
import ShowTodo from './showtodo'
class CreateTodo extends Component{
    constructor(props){
            super(props);
            this.state={
                todolist:[{todoitem:'night',numberId:Math.random()*3}],
                isLoading:true
            }
    }
    render(){
        
             this.buttonHandler=() =>{
           let todoitem=this.refs.create.value;
           let numberId= Math.random()*3;
           console.log("to do item!!!",todoitem)
           console.log("this is id !!!",numberId)
           let allValues = this.state.todolist;
           let newValue={todoitem:todoitem,numberId:numberId}
           this.setState(
           {todolist:[...allValues,newValue]}
           )
          
       }
             this.removeHandler=(id)=>{
                 let alltodo=this.state.todolist;
                let newTodos= alltodo.filter((values)=>{
                    return values.numberId!==id;
                 })
                 console.log("removehandler trigger!!!")
                 console.log(id)
              this.setState({todolist:newTodos})
             }
    
      
        return(
        <div>
            <h1>Create Todo</h1>
            <div>
           
            <input ref="create" type="text" placeholder="Create Todo"/>
            <button type="submit" onClick={this.buttonHandler}>Create Todo</button>
            <br/>
         <ShowTodo alltodo={this.state.todolist} func={(id)=>this.removeHandler(id)} />
            </div>
         </div>
        )
}
}
export default CreateTodo;