import axios from "../../axios";
import { Transporter, ResponseTransporter } from "./dataTypes";

// Parameter name changed to avoid conflict
//* signup transporter
export const postTransporter = (transporter: Transporter) => {
  return axios
    .post<ResponseTransporter>("/transporter-service/transporter", {
      username: transporter.username,
      password: transporter.password,
      email: transporter.email,
      address: transporter.address,
    })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//* show all transporters to admin
export const getTransporter = (administratorEmail) => {
  return axios
    .get<ResponseTransporter[]>(
      `/transporter-service/transporter/${administratorEmail}`
    )
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//* login
export const postLogin = (request: Transporter) => {
  return axios
    .post<ResponseTransporter>("/transporter-service/login", { body: request })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};
