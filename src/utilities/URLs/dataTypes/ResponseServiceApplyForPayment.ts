export default class ResponseServiceApplyForPayment {
  serviceApplyId: string;
  serviceName: string;
  price: number;

  constructor(
    serviceApplyId: string,
    serviceName: string,
    price: number
  ) {
    this.serviceApplyId = serviceApplyId;
    this.serviceName = serviceName;
    this.price = price;
  }
}
