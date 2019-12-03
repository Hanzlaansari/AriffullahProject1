let AddFrnd = (payload)=>{
    return {type:"Add_friend",payload}
}

let UnFriend = (payload)=>{
    return {type:"Unfriend",payload}
}

let workplace=(payload)=>{
  return {type:"workplace",payload}
}

let college=(payload)=>{
  return {type:"college",payload}
}

let school=(payload)=>{
  return {type:"school",payload}
}

let basicInfo=(payload)=>{
  return {type:"basicInfo",payload}
}

let addressAction=(payload)=>{
  return {type:"address",payload}
}

let relationStatus=(payload)=>{
  return {type:"relationStatus",payload}
}

let familyMember=(payload)=>{
  return {type:"familyMember",payload }
}

export {AddFrnd,UnFriend, workplace, college, school, basicInfo, addressAction, relationStatus,familyMember};