import axios from "../../axios";
import {
  ResponseTransportService,
  RequestTransportServiceByTransporterId,
  RequestWeightRange,
} from "./dataTypes";
import { useSelector } from "react-redux";
import { store } from "../../redux/reducers";

//*user get services list in user home-> "/"
export const get = () => {
  return axios
    .get<ResponseTransportService[]>("/transport-service/")
    .then((response) => {
      //*   [
      //*     {
      //*         "serviceId": "Transporterjohn.doe@example.com14service001001",
      //*         "serviceName": "service001001",
      //*         "serviceDescription": "thisisDescription",
      //*         "departures": "seoul, busan",
      //*         "destinations": "seoul, busan",
      //*         "transporterName": "john_doe14",
      //*         "transporterId": "Transporterjohn.doe@example.com14",
      //*         "responseWeightRanges": [
      //*             {
      //*                 "id": 1,
      //*                 "minWeight": "100kg",
      //*                 "maxWeight": "2t",
      //*                 "price": 100
      //*             }
      //*         ]
      //*     }
      //* ]
      console.log("get");
      return response;
    })
    .catch((error) => {
      console.log("get error", error);
      throw error;
    });
};

//* user?? gets service in sevice/:id page
export const getByServiceId = (id) => {
  return axios
    .get<ResponseTransportService>(`/transport-service/byServiceId/${id}`)
    .then((response) => {
      //*   {
      //*     "serviceId": "Transporterjohn.doe@example.com14service001001",
      //*     "serviceName": "service001001",
      //*     "serviceDescription": "thisisDescription",
      //*     "departures": "seoul, busan",
      //*     "destinations": "seoul, busan",
      //*     "transporterName": "john_doe14",
      //*     "transporterId": "Transporterjohn.doe@example.com14",
      //*     "responseWeightRanges": [
      //*         {
      //*             "id": 1,
      //*             "minWeight": "100kg",
      //*             "maxWeight": "2t",
      //*             "price": 100
      //*         }
      //*     ]
      //* }
      console.log("getByServiceId", response);
      return response;
    })
    .catch((error) => {
      console.log("getByServiceId error", error);
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
      console.log("getMakingService response");
      return response;
    })
    .catch((error) => {
      console.log("getMakingService error", error);
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
      console.log("postMakingWeightRange response");
      return response;
    })
    .catch((error) => {
      console.log("postMakingWeightRange error", error);
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
      console.log("getByServiceName", response);
      return response;
    })
    .catch((error) => {
      console.log("getByServiceName error", error);
      throw error;
    });
};

//DONE
//* transporter gets his services at home page
export const getByTransporterId = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseTransportService[]>(
      "/transport-service/byTransporterId",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getByTransporterId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getByTransporterId error", error);
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
      console.log("postModifyService response", response);
      return response;
    })
    .catch((error) => {
      console.log("postModifyService error", error);
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
    .get<String>(
      "/transport-service/deleteServiceByServiceId/" + serviceId,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getDeleteServiceByServiceId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getDeleteServiceByServiceId error", error);
      throw error;
    });
};
