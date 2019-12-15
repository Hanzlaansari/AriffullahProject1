const aboutInfo = (
  state = [
    { name: "workplace", value: "", privacy: "public", data: false },
    { name: "college", value: "", privacy: "public", data: false },
    { name: "school", value: "", privacy: "public", data: false },
    { name: "phone", value: "", privacy: "public", data: false },
    { name: "email", value: "", privacy: "public", data: false },
    { name: "languages", value: "", privacy: "public", data: false },
    { name: "dateOfBirth", value: "", privacy: "public", data: false },
    { name: "country", value: "", privacy: "public", data: false },
    { name: "city", value: "", privacy: "public", data: false },
    { name: "postalCode", value: "", privacy: "public", data: false },
    { name: "address", value: "", privacy: "public", data: false },
    { name: "reationStatus", value: "", privacy: "public", data: false },
    { name: "familyMember", value: [], privacy: "public", data: false }
  ],
  action
) => {
  switch (action.type) {
    case "workplace":
      state[0].value = action.payload;
      state[0].data = true;
      return [...state];
    case "college":
      state[1].value = action.payload;
      state[1].data = true;
      return [...state];
    case "school":
      state[2].value = action.payload;
      state[2].data = true;
      return [...state];
    case "phone":
      state[3].value = action.payload;
      state[3].data = true;
      return [...state];
    case "email":
      state[4].value = action.payload;
      state[4].data = true;
      return [...state];
    case "languages":
      state[5].value = action.payload;
      state[5].data = true;
      return [...state];
    case "dateOfBirth":
      state[6].value = action.payload;
      state[6].data = true;
      return [...state];
    case "country":
      state[7].value = action.payload;
      state[7].data = true;
      return [...state];
    case "city":
      state[8].value = action.payload;
      state[8].data = true;
      return [...state];
    case "postalCode":
      state[9].value = action.payload;
      state[9].data = true;
      return [...state];
    case "address":
      state[10].value = action.payload;
      state[10].data = true;
      return [...state];
    case "relationStatus":
      state[11].value = action.payload;
      state[11].data = true;
      return [...state];
    case "familyMember":
      state[12].value.push(action.payload);
      state[12].data = true;
      return [...state];
    case "delInfo":
      state[action.payload].data = false;
      return [...state];  
    default:
      return state;
  }
};
export default aboutInfo;
