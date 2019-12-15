let audioReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_AUDIO":
      return [...state, action.payload];
    case "DELETE_AUDIO":
      console.log(action.payload);
      return state.filter(audios => {
        console.log("audio id" + audios.id);
        return audios.id !== action.payload;
      });
    case "EDIT_AUDIO":
      console.log(action.payload)
      state[action.payload.index].title = action.payload.title;
      return [...state];
    default:
      return state;
  }
};
export default audioReducer;

