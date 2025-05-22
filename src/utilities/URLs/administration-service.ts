import axios from "../../axios";
import { ResponseService } from "./dataTypes";

export const getGetServiceByEmail = (administratorEmail) => {
  axios
    .get<ResponseService[]>(
      "/administration-service/getServicesByEmail/" + administratorEmail
    )
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    }); //List of services tied to that administrator
};

export const postPermitServiceByAdministrator = (
  serviceId,
  administratorEmail
) => {
  axios
    .post<ResponseService>(
      `/administration-service/permitService/${serviceId}/byAdministrator/${administratorEmail}`
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
