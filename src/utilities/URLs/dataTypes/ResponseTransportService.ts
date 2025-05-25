import ResponseWeightRanges from './ResponseWeightRange'
export default interface ResponseTransportService {
  //serviceId
  serviceName: string;
  serviceDescription: string;
  departures: string;
  destinations: string;
  transporterName: string;
  transporterId: string;
  responseWeightRanges: ResponseWeightRanges[],
  //permitted
}