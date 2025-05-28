const DEFAULT_TOKEN = null;
const { TOKEN } = require("../actions/types");

const token = (state = DEFAULT_TOKEN, action) => {
  switch (action.type) {
    case TOKEN.SAVE:
      return action.payload;
    case TOKEN.DELETE:
      return DEFAULT_TOKEN;
    default:
      return state;
  }
};

export default token;
