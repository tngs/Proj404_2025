import axios from "../../axios";
import { ResponseTransportService,RequestTransportServiceByTransporterId, RequestWeightRange, } from "./dataTypes";

export const get = () => {
  axios
    .get<ResponseTransportService[]>("/")
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
    .get<ResponseTransportService[]>("/makingService/" + transporterId)
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
    .get<RequestWeightRange[]>("/makingWeightRange/" + serviceId)
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
    .get<ResponseTransportService[]>("/byServiceName/" + serviceName)
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
    .get<ResponseTransportService[]>("/byTransporterId/" + transporterId)
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
    .post<ResponseTransportService[]>("/modifyService/" + serviceId, { body: request })
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}
