import React,{Component} from 'react'
export default class ShowTodo extends Component{
    render(){
        let alltodo = this.props.alltodo;
        let func=this.props.func;
        console.log(alltodo);
      
        return(
        <div>
            <h2>All Todos</h2>
            {alltodo.map((data)=>{
            return(
             <div key={data.numberId} style={{border:'red',width:'800px',height:'30px',margin:'0 auto',padding:'20px'}}>{data.todoitem}<button onClick={()=> func(data.numberId)}>remove</button>
                 </div>
      )  })}
                </div>
  
   
        )
    }
}