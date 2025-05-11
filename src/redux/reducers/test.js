const test = (state = null, action) => {
  switch (action.type) {
    case "TEST":
      console.log("TEST rducer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      console.log("state", state);
      console.log("action", action);
      console.log("TEST rducer//////////////////////////////");
      return action?.payload ? action.payload : null;
  }
  return state;
};
//defending on what did the action.type say it decides how to update the state with the given action.payload
export default test;