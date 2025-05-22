import axios from "../../axios";
import { ResponseTransportService } from "./dataTypes";

export const get = () => {
  return axios.get<ResponseTransportService[]>("/");
};

export const getByServiceId = (id) => {
  return axios.get<ResponseTransportService>(
    `/transport-service/byServiceId/${id}`
  );
};
