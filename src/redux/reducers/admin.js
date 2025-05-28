const DEFAULT_ADMIN = {};

const admin = (state = DEFAULT_ADMIN, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      console.log("ADMIN_LOGIN action.payload", action.payload);
      return {...action.payload};
    case "ADMIN_LOGOUT":
      return DEFAULT_ADMIN;
    default:
      return state;
  }
};

export default admin;
