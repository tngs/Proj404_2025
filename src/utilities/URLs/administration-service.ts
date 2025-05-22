import axios from "../../axios";
import { ResponseService } from "./dataTypes";

export const getGetServiceByEmail = (administratorEmail) => {
  return axios.get<ResponseService[]>(
    "/administration-service/getServicesByEmail/" + administratorEmail
  ); //List of services tied to that administrator
};

export const postPermitServiceByAdministrator = (
  serviceId,
  administratorEmail
) => {
  return axios.post<ResponseService>(
    `/administration-service/permitService/${serviceId}/byAdministrator/${administratorEmail}`
  );
};
