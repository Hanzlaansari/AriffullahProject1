let videoReducer = (state=[],action)=>{
    switch(action.type){
        case "ADD_VIDEO":
            return [...state,action.payload]
            case "DELETE_VIDEO":
                return state.filter((videos)=>{
                    
                    return videos.id !==action.payload
                })
                case "EDIT_VIDEO":
                   let allvideos= state.map((video)=>{
                       let {id,caption} = action.payload;
                      
                        if(video.id===id){
                             video.caption = caption
                        }
                        return video
                    })
                    return allvideos

                     
            default:
                return state
    }
}
export default videoReducer;