import axios from "../../axios";
import { TransportUser, ResponseTransportUser } from "./dataTypes";
import { store } from "../../redux/reducers";
import errors from "./errors.json";/////

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
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
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
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//DONE
//*admin gets all users
export const getTransportUser = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseTransportUser[]>("/transport-user-service/transport-user/checkByAdministrator",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getTransportUser response", response);
      return response;
    })
    .catch((error) => {
      console.log("getTransportUser error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//TODO make registradtion
