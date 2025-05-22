import axios from "../axios";
import { Transporter, ResponseTransporter } from "./dataTypes";

// Parameter name changed to avoid conflict
export const postTransporter = (transporter: Transporter) => {
  return axios.post<ResponseTransporter>("/transporter-service/transporter", {
    username: transporter.username,
    password: transporter.password,
    email: transporter.email,
    address: transporter.address,
  });
};

export const getTransporter = (transporterId) => {
  return axios.get(`/transporter-service/transporter/${transporterId}`);
};

export const postLogin = (transporter: Transporter) => {
  return axios.post<ResponseTransporter>("/transporter-service/transporter");
};
