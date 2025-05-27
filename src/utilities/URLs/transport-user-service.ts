import axios from "../../axios";
import { TransportUser, ResponseTransportUser } from "./dataTypes";

//DONE
//*login
export const postLogin = (user: TransportUser) => {
  return axios
    .post<ResponseTransportUser>("/transport-user-service/login")
    .then((response) => {
      console.log("postLogin response", response);
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      console.log(user)
      throw error;
    });
};

export const postTransportUser = (user: TransportUser) => {
  return axios
    .post<ResponseTransportUser>("/transport-user-service/transport-user")
    .then((response) => {
      console.log("postLogin response", response);
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      throw error;
    });
};

//DONE
//*admin gets all users
export const getTransportUser = (administratorEmail) => {
  return axios
    .get<ResponseTransportUser[]>("/transport-user-service/transport-user/"+administratorEmail)
    .then((response) => {
      console.log("getTransportUser response", response);
      return response;
    })
    .catch((error) => {
      console.log("getTransportUser error", error);
      throw error;
    });
};

//TODO make registradtion