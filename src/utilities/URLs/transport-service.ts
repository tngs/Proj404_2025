import axios from "../../axios";
import { ResponseTransportService,RequestTransportServiceByTransporterId, RequestWeightRange, } from "./dataTypes";

//DONE
//*user get services list in user home-> "/" 
export const get = () => {
  return axios
    .get<ResponseTransportService[]>("/transport-service")
    .then((response) => {
      console.log("get response", response);
      return response;
    })
    .catch((error) => {
      console.log("get error", error);
      return error;
    });
};

//DONE
//* user?? gets service in sevice/:id page
export const getByServiceId = (id) => {
  return axios
    .get<ResponseTransportService>(`/transport-service/byServiceId/${id}`)
    .then((response) => {
      console.log("getByServiceId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getByServiceId error", error);
      return error;
    });
};

//transportertransporter
//* transporter make service
//TODO make MakeService Page
export const getMakingService = (transporterId) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/makingService/" + transporterId)
    .then((response) => {
      console.log("getMakingService response", response);
      return response;
    })
    .catch((error) => {
      console.log("getMakingService error", error);
      return error;
    });
}

//transportertransporter
//* transporter making a weight range in service
//TODO add a button besides the weight that send the data
export const postMakingWeightRange = (serviceId, request: RequestWeightRange) => {
  return axios
    .post<RequestWeightRange[]>("/transport-service/makingWeightRange/" + serviceId)
    .then((response) => {
      console.log("postMakingWeightRange response", response);
      return response;
    })
    .catch((error) => {
      console.log("postMakingWeightRange error", error);
      return error;
    });
}

//DONE
//* user search service by name
export const getByServiceName = (serviceName) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/byServiceName/" + serviceName)
    .then((response) => {
      console.log("getByServiceName response", response);
      return response;
    })
    .catch((error) => {
      console.log("getByServiceName error", error);
      return error;
    });
}

//transportertransporter
//* transporter gets his services at home page
export const getByTransporterId = (transporterId) => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/byTransporterId/" + transporterId)
    .then((response) => {
      console.log("getByTransporterId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getByTransporterId error", error);
      return error;
    });
}

//transportertransporter
//* transporter: this is the edit service button in service/:id page
//* on edit mode
export const postModifyService = (serviceId, request/*:RequestTransportService*/) => {
  return axios
    .post<RequestTransportServiceByTransporterId>("/transport-service/modifyService/" + serviceId, { body: request })
    .then((response) => {
      console.log("postModifyService response", response);
      return response;
    })
    .catch((error) => {
      console.log("postModifyService error", error);
      return error;
    });
}

//transportertransporter
//* transporter: this is the delete service button in service/:id page
//* on edit mode
//TODO: add delete button
export const getDeleteServiceByServiceId = (serviceId) => {
  return axios
    .get<String>("/transport-service/deleteServiceByServiceId/" + serviceId)
    .then((response) => {
      console.log("getDeleteServiceByServiceId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getDeleteServiceByServiceId error", error);
      return error;
    });
}

