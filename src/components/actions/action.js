let AddFrnd = payload => {
  return { type: "Add_friend", payload };
};

let UnFriend = payload => {
  return { type: "Unfriend", payload };
};

let workplace = payload => {
  return { type: "workplace", payload };
};

let college = payload => {
  return { type: "college", payload };
};

let school = payload => {
  return { type: "school", payload };
};

let addPhone = payload => {
  return { type: "phone", payload };
};
let addEmail = payload => {
  return { type: "email", payload };
};
let addLanguage = payload => {
  return { type: "languages", payload };
};
let addDateOfBirth = payload => {
  return { type: "dateOfBirth", payload };
};

let addCountry = payload => {
  return { type: "country", payload };
};
let addCity = payload => {
  return { type: "city", payload };
};
let addPostalCode = payload => {
  return { type: "postalCode", payload };
};
let addAddress = payload => {
  return { type: "address", payload };
};

let relationStatus = payload => {
  return { type: "relationStatus", payload };
};

let familyMember = payload => {
  return { type: "familyMember", payload };
};
let delInfo = payload => {
  return { type: "delInfo", payload };
};

let addAudio =payload =>{
  return{
    type:"ADD_AUDIO",payload
  }
}
let editAudio =payload =>{
  return{
    type:"EDIT_AUDIO",payload
  }
}
let deleteAudio =payload =>{
  console.log(payload)
  return{
    type:"DELETE_AUDIO",payload
  }
}
let addVideo =payload =>{
  return{
    type:"ADD_VIDEO",payload
  }
}
let deleteVideo =payload =>{
  return{
    type:"DELETE_VIDEO",payload
  }
}
let editVideo =payload =>{
  return{
    type:"EDIT_VIDEO",payload
  }
}


export {
  deleteAudio,
  editVideo,
  deleteVideo,
  addVideo,
  addAudio,
  AddFrnd,
  UnFriend,
  workplace,
  college,
  school,
  addPhone,
  addEmail,
  addLanguage,
  addDateOfBirth,
  addCountry,
  addCity,
  addPostalCode,
  addAddress,
  relationStatus,
  familyMember,
  delInfo,
  editAudio

};
