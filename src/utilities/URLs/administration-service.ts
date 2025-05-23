import axios from "../../axios";
import {
  ResponseService,
  ResponseAdministrator,
  RequestAdministrator,
  ResponsePermit,
} from "./dataTypes";

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

//Create Administrator
export const postMakeAdministrator = (request: RequestAdministrator) => {
  axios
    .post<ResponseAdministrator>("/administration-service/makeAdministrator")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//Grant Administrator Permissions
export const getPermitAdministrator = (administratorEmail) => {
  axios
    .get<ResponsePermit>(
      `/administration-service/permitAdministrator/${administratorEmail}`
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

//View Services by Administrator
export const getGetServicesByEmail = (administratorEmail) => {
  axios
    .get<ResponseService[]>(
      `/administration-service/getServicesByEmail/${administratorEmail}`
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

// Admin View of Service Detail
export const getPermitServiceByAdministrator = (
  serviceId,
  administratorEmail
) => {
  axios
    .get<ResponseService>(
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

//Approve Service
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

export const getGetServiceByAdministrator = (serviceId,administratorEmail) => {
  axios
    .get<ResponseService>(
      `/getService/${serviceId}/byAdministrator/${administratorEmail}`
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