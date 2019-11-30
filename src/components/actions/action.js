let AddFrnd = (payload)=>{
    return {type:"Add_friend",payload}
}
let UnFriend = (payload)=>{
    return {type:"Unfriend",payload}
}
export {AddFrnd,UnFriend};