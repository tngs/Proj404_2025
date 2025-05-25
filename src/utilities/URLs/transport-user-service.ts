import axios from "../../axios";
import { TransportUser, ResponseTransportUser } from "./dataTypes";
//*login
export const postLogin = (user: TransportUser) => {
  axios
    .post<ResponseTransportUser>("/transport-user-service/login")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      console.log(user)
      return error;
    });
};

//*admin gets all users
export const getTransportUser = (administratorEmail) => {
  axios
    .get<ResponseTransportUser[]>("/transport-user-service/transport-user/"+administratorEmail)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//TODO make registradtion