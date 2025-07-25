import axios from "../../axios";
import {
  ResponseService,
  ResponseAdministrator,
  RequestAdministrator,
  ResponsePermit,
  RequestLogin,
} from "./dataTypes";
import { store } from "../../redux/reducers";
import errors from "./errors.json"; ////


//DONE USED
//* admin signup
//TODO alert the response
export const postMakeAdministrator = (request: RequestAdministrator) => {
  return axios
    .post<ResponseAdministrator>(
      "/administration-service/makeAdministrator",
      request
    )
    .then((response) => {
      console.log("postMakeAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("postMakeAdministrator error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//*    give the admin permitted
//? IDK why
//TODO alert success
//TODO dispatch "permitted"
export const getPermitAdministrator = (UnPermittedAdministratorEmail) => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponsePermit>(
      `/administration-service/permitAdministrator/${UnPermittedAdministratorEmail}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      //TODO should save the response to store
      console.log("getPermitAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPermitAdministrator error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//DONE
//* admin sets the service permit to true
//TODO just make Permit Buttton at Service/:id
export const getPermitServiceByAdministrator = (
  serviceId //? serviceId: 111 XXXXXXXX  admin@gmai.com111 VVVVVVVVVV
) => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseService>(
      `/administration-service/permitService/${serviceId}/byAdministrator`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getPermitServiceByAdministrator response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPermitServiceByAdministrator error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//DONE USED
//TODO make login
//*/administration-service/login  - required object: RequestLogin
export const postLogin = (request: RequestLogin) => {
  console.log("postLogin");
  return axios
    .post<ResponseAdministrator>("/administration-service/login", request)
    .then((response) => {
      console.log("postLogin response", response);
      return response;
    })
    .catch((error) => {
      console.log("postLogin error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};

//DONE
//*admin page gets the services
export const getGetServicesByEmail = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseService[]>(`/administration-service/getServicesByEmail`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("getGetServicesByEmail response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetServicesByEmail error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
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
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if (error.code === "ERR_NETWORK") {
        error.error = "Network Error";
        error.message =
          "Somthing wrong with the network. Please check you internet!";
      }
      throw error;
    });
};
