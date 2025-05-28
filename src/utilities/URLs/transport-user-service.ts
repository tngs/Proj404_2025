import axios from "../../axios";
import { TransportUser, ResponseTransportUser } from "./dataTypes";
import { tokenSave } from "../../redux/actions/token";

//DONE
//*login
export const postLogin = (body: TransportUser) => {
  return axios
    .post<ResponseTransportUser>("/transport-user-service/login", body, {
      withCredentials: true,
    })
    .then((response) => {
      console.log("postLogin", response);
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      throw error;
    });
};

export const postTransportUser = (body: TransportUser) => {
  return axios
    .post<ResponseTransportUser>("/transport-user-service/transport-user", body)
    .then((response) => {
      console.log("postLogin");
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      throw error;
    });
};

//DONE
//*admin gets all users
export const getTransportUser = () => {
  return axios
    .get<ResponseTransportUser[]>("/transport-user-service/transport-user")
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
