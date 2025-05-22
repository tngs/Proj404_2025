import axios from "../../axios";
import { ResponseTransportService } from "./dataTypes";

export const get = () => {
  axios
    .get<ResponseTransportService[]>("/")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

export const getByServiceId = (id) => {
  axios
    .get<ResponseTransportService>(`/transport-service/byServiceId/${id}`)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};
