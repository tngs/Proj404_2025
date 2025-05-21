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
