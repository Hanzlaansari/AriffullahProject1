const aboutInfo = (
  state = [
    { name: "workplace", value: "", privacy: "public", data:false },
    { name: "college", value: "", privacy: "public" , data:false },
    { name: "school", value: "", privacy: "public" , data:false },
    {
      name: "basicInfo",
      value: { phone: "", email: "", languages: [], dateOfBirth: "" },
      privacy: "public",
      data:false
    },
    {
      name: "address",
      value: { country: "", city: "", division: "", address: "" },
      privacy: "public",
      data:false
    },
    { name: "reationStatus", value: "", privacy: "public" , data:false },
    { name: "familyMember", value: [], privacy: "public" , data:false }
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
    case "basicInfo":
      state[3].value = action.payload;
      state[3].data = true;
      return [...state];
    case "address":
      state[4].value = action.payload;
      state[4].data = true;
      return [...state];
    case "relationStatus":
      state[5].value = action.payload;
      state[5].data = true;
      return [...state];
    case "familyMember":
      state[6].value.push(action.payload);
      state[6].data = true;
      return [...state];
    default:
      return state;
  }
};
export default aboutInfo;
