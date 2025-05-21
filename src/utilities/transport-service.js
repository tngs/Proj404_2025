import axios from "../axios";

export const get = () => {
  return axios.get(); //List<ResponseTransportService>
  /*
        serviceName
        departures
        destinations
        transporterName
    */
};

export const getByServiceId = (id) => {
  return axios.get(`/transport-service/byServiceId/${id}`); //ResponseTransportService
}