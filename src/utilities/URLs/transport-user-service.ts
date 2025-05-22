import axios from "../../axios";
import { TransportUser, ResponseTransportUser } from "./dataTypes";

export const postLogin = (user: TransportUser) => {
  axios
    .post<ResponseTransportUser>("/transport-user-service/login")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      const user: ResponseTransportUser = {username:123}
      console.log(user)
      return error;
    });
};
