let movieReducer = (state=[],action)=>{
    console.log("this is reducer****",action.payload)
    switch(action.type){
            case "ADD":
            return [...state,action.payload]
            case "FILTER":
          return(
           action.payload.movies.filter((data)=>{
               console.log(typeof(action.payload.movies))
                console.log("data tested in action***",action.payload.movies.key);  
                console.log("key tested in action***",action.payload.key);
                return(
            data.key == action.payload.key
              )
               
            })
            )
            
    }
}
            export default movieReducer;