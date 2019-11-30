// import {createReaducer }from 



 let friendsReducer=(state=[
    {id:Math.random().toString(), name:"Muhammad Hanzla"}
  ],action)=>{
    
    switch(action.type){
        case "Add_friend":
        return [...state, action.payload]
        case "Unfriend":
        return state.filter((val)=>{
            return val.id!==action.payload.id;
        })
        default:
        return state;

    }
}
export default friendsReducer;