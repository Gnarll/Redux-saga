export default (state, action) => {
  switch (action.type) {
    case "CLICK":
      console.log("click");
      return state;
    default:
      return state;
  }
};
