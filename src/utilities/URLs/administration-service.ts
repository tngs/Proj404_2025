import axios from "../../axios";
import {
  ResponseService,
  ResponseAdministrator,
  RequestAdministrator,
  ResponsePermit,
} from "./dataTypes";

//* admin signup
//TODO alert the response
export const postMakeAdministrator = (request: RequestAdministrator) => {
  axios
    .post<ResponseAdministrator>("/administration-service/makeAdministrator", request)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*    give the admin permitted
//TODO alert success
//TODO dispatch "permitted"
export const getPermitAdministrator = (
  UnPermittedAdministratorEmail 
) => {
  axios
    .get<ResponsePermit>(
      `/permitAdministrator/toAdministrator/${UnPermittedAdministratorEmail}`
    )
    .then((response) => {
      //TODO should save the response to store
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*admin page gets the services
export const getGetServicesByEmail = () => {
  return axios
    .get<ResponseService[]>(
      `/administration-service/getServicesByEmail`
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

//* admin sets the service permit to true
//TODO just make Permit Buttton at Service/:id
export const getPermitServiceByAdministrator = (
  serviceId,
) => {
  axios
    .get<ResponseService>(
      `/administration-service/permitService/${serviceId}/byAdministrator/}`
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

//*admin gets the service data at Sevice/:id page
//TODO make Service/:id page at admin
export const getGetServiceByAdministrator = (serviceId) => {
  axios
    .get<ResponseService>(`/getService/${serviceId}/byAdministrator`)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};


//TODO make login