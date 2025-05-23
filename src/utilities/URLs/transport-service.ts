import axios from "../../axios";
import { ResponseTransportService,RequestTransportServiceByTransporterId, RequestWeightRange, } from "./dataTypes";

export const get = () => {
  axios
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

export const getMakingService = (transporterId) => {
  axios
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

export const getMakingWeightRange = (serviceId) => {
  axios
    .get<RequestWeightRange[]>("/transport-service/makingWeightRange/" + serviceId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

export const getByServiceName = (serviceName) => {
  axios
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

export const getByTransporterId = (transporterId) => {
  axios
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

export const postModifyService = (serviceId, request/*:RequestTransportService*/) => {
  axios
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


export const deleteDeleteServiceByServiceId = (serviceId) => {
  axios
    .delete<String>("/transport-service/deleteServiceByServiceId/" + serviceId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

