import axios from "../../axios";
import {
  ResponseService,
  ResponseAdministrator,
  RequestAdministrator,
  ResponsePermit,
  RequestLogin,
} from "./dataTypes";

//DONE USED
//* admin signup
//TODO alert the response
export const postMakeAdministrator = (request: RequestAdministrator) => {
  return axios
    .post<ResponseAdministrator>("/administration-service/makeAdministrator", request)
    .then((response) => {
      console.log("postMakeAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("postMakeAdministrator error", error);
      return error;
    });
};

//*    give the admin permitted 
//? IDK why
//TODO alert success
//TODO dispatch "permitted"
export const getPermitAdministrator = (
  UnPermittedAdministratorEmail 
) => {
  return axios
    .get<ResponsePermit>(
      `/permitAdministrator/toAdministrator/${UnPermittedAdministratorEmail}`
    )
    .then((response) => {
      //TODO should save the response to store
      console.log("getPermitAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPermitAdministrator error", error);
      return error;
    });
};

//DONE
//*admin page gets the services
export const getGetServicesByEmail = () => {
  return axios
    .get<ResponseService[]>(
      `/administration-service/getServicesByEmail`
    )
    .then((response) => {
      console.log("getGetServicesByEmail response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetServicesByEmail error", error);
      return error;
    });
};

//DONE
//* admin sets the service permit to true
//TODO just make Permit Buttton at Service/:id
export const getPermitServiceByAdministrator = (
  serviceId,
) => {
  return  axios
    .get<ResponseService>(
      `/administration-service/permitService/${serviceId}/byAdministrator/`
    )
    .then((response) => {
      console.log("getPermitServiceByAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPermitServiceByAdministrator error", error);
      return error;
    });
};

//DONE
//*admin gets the service data at Sevice/:id page
export const getGetServiceByAdministrator = (serviceId) => {
  return axios
    .get<ResponseService>(`/getService/${serviceId}/byAdministrator`)
    .then((response) => {
      console.log("getGetServiceByAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetServiceByAdministrator error", error);
      return error;
    });
};

//DONE USED
//TODO make login
//*/administration-service/login  - required object: RequestLogin
export const postLogin = (request: RequestLogin) => {
  return axios
    .post<ResponseAdministrator>("/administration-service/makeAdministrator", request)
    .then((response) => {
      console.log("postMakeAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("postMakeAdministrator error", error);
      return error;
    });
};