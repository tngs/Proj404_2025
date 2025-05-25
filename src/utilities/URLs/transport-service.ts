import axios from "../../axios";
import { ResponseTransportService,RequestTransportServiceByTransporterId, RequestWeightRange, } from "./dataTypes";

//*user get services list in user home-> "/" 
export const get = () => {
  return axios
    .get<ResponseTransportService[]>("/transport-service")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//* user?? gets service in sevice/:id page
export const getByServiceId = (id) => {
  return axios
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

//* transporter make service
//TODO make MakeService Page
export const getMakingService = (transporterId) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/makingService/" + transporterId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//* transporter making a weight range in service
//TODO add a button besides the weight that send the data
export const postMakingWeightRange = (serviceId, request: RequestWeightRange) => {
  return axios
    .post<RequestWeightRange[]>("/transport-service/makingWeightRange/" + serviceId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//* user search service by name
//TODO make search bar
export const getByServiceName = (serviceName) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/byServiceName/" + serviceName)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//* transporter gets his services at home page
export const getByTransporterId = (transporterId) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/byTransporterId/" + transporterId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//* transporter: this is the edit service button in service/:id page
//* on edit mode
export const postModifyService = (serviceId, request/*:RequestTransportService*/) => {
  return axios
    .post<RequestTransportServiceByTransporterId>("/transport-service/modifyService/" + serviceId, { body: request })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//* transporter: this is the delete service button in service/:id page
//* on edit mode
//TODO: add delete button
export const getDeleteServiceByServiceId = (serviceId) => {
  return axios
    .get<String>("/transport-service/deleteServiceByServiceId/" + serviceId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

