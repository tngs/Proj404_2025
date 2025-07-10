import axios from "../../axios";
import {
  ResponseTransportService,
  RequestTransportServiceByTransporterId,
  RequestWeightRange,
} from "./dataTypes";
import { store } from "../../redux/reducers";
import errors from "./errors.json";

//*user get services list in user home-> "/"
export const get = () => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/")
    .then((response) => {
      console.log("get");
      return response;
    })
    .catch((error) => {
      console.log("error /get", error);
     if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

//* user?? gets service in sevice/:id page
export const getByServiceId = (id) => {
  return axios
    .get<ResponseTransportService>(`/transport-service/byServiceId/${id}`)
    .then((response) => {
      console.log("getByServiceId", response);
      return response;
    })
    .catch((error) => {
      console.log("error /getByServiceId ", error);
      // if(error.status === 503)
      //   error.message = "Service Unavailable"

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

//* transporter make service
//TODO make MakeService Page
export const getMakingService = (request) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<ResponseTransportService[]>(
      "/transport-service/makingService",
      request,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response /getMakingService");
      return response;
    })
    .catch((error) => {
      console.log("error /getMakingService", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

//transportertransporter
//* transporter making a weight range in service
export const postMakingWeightRange = (
  serviceId,
  request: RequestWeightRange
) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<RequestWeightRange[]>(
      "/transport-service/makingWeightRange/" + serviceId,
      request,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      //*same
      console.log("response /postMakingWeightRange");
      return response;
    })
    .catch((error) => {
      console.log("error /postMakingWeightRange", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

//* user search service by name
export const getByServiceName = (serviceName) => {
  return axios
    .get<ResponseTransportService[]>(
      `/transport-service/byServiceName/${serviceName}`
    )
    .then((response) => {
      console.log("response /getByServiceName", response);
      return response;
    })
    .catch((error) => {
      console.log("error /getByServiceName ", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

//DONE
//* transporter gets his services at home page
export const getByTransporterId = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseTransportService[]>("/transport-service/byTransporterId", {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("response /getByTransporterId", response);
      return response;
    })
    .catch((error) => {
      console.log("error /getByTransporterId", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

//DONE
//* transporter: this is the edit service button in service/:id page
//* on edit mode
export const postModifyService = (
  serviceId,
  request: RequestTransportServiceByTransporterId
) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<ResponseTransportService>(
      "/transport-service/modifyService/" + serviceId,
      request,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response /postModifyService", response);
      return response;
    })
    .catch((error) => {
      console.log("error /postModifyService", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

export const postModifyServiceContent = (
  serviceId,
  request: RequestTransportServiceByTransporterId
) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<ResponseTransportService>(
      "/transport-service/modifyServiceContent/" + serviceId,
      request,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response /postModifyService ", response);
      return response;
    })
    .catch((error) => {
      console.log("error /postModifyService", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};
//DONE
//* transporter: this is the delete service button in service/:id page
//* on edit mode
//TODO: add delete button
export const getDeleteServiceByServiceId = (serviceId) => {
  const token = store.getState()?.account?.token;
  return axios
    .get<String>("/transport-service/deleteServiceByServiceId/" + serviceId, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("response /getDeleteServiceByServiceId", response);
      return response;
    })
    .catch((error) => {
      console.log("error /getDeleteServiceByServiceId", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

export const getDeleteWeightRange = (weightRangeId) => {
  const token = store.getState()?.account?.token;
  return axios
    .get<String>("/transport-service/deleteWeightRange/" + weightRangeId, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("response /getDeleteWeightRange", response);
      return response;
    })
    .catch((error) => {
      console.log("error /getDeleteWeightRange", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};

export const postUpdateWeightRange = (weightRangeId, body) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<String>(
      "/transport-service/updateWeightRange/" + weightRangeId,
      body,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response /postUpdateWeightRange ", response);
      return response;
    })
    .catch((error) => {
      console.log("error /postUpdateWeightRange", error);

      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code==="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      if(error.code==="ERR_NETWORK"){

      }
      throw error;
    });
};
