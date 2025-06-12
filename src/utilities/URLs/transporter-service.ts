import axios from "../../axios";
import { store } from "../../redux/reducers";
import { Transporter, ResponseTransporter } from "./dataTypes";

//DONE
// Parameter name changed to avoid conflict
//* signup transporter
export const postTransporter = (transporter: Transporter) => {
  return axios
    .post("/transporter-service/transporter", transporter)
    .then((response) => {
      console.log("postTransporter response", response);
      return response;
    })
    .catch((error) => {
      console.log("postTransporter error", error);
      throw error;
    });
};

//DONE
//* show all transporters to admin
export const getTransporter = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseTransporter[]>(
      `/transporter-service/transporter/checkByAdministrator`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getTransporter response", response);
      return response;
    })
    .catch((error) => {
      console.log("getTransporter error", error);
      throw error;
    });
};

//DONE
//* login
export const postLogin = (request: Transporter) => {
  //? username: string;
  //? password: string;
  //? email: string;
  //? address: string;
  return axios
    .post<ResponseTransporter>("/transporter-service/login", request)
    .then((response) => {
      console.log("postLogin response", response);
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      throw error;
    });
};
