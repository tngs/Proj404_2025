import axios from "../../axios";

export const getPayServiceByApplyId = (applyId) => {
  axios
    .get<String>("/payServiceByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};
