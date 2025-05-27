export default interface ResponseServiceApply {
  //* Order data
  orderId: number;

  serviceId: number;
  userId: number;
  paid: boolean;

  detailed: {
    departure: string;
    destination: string;
    serviceName: string;
    transporterName: string;
    transportUserName: string;
    weightRange: any;
    description: string;
  };
  //   departure: string;
  //   destination: string;
  //   serviceName: string;
  //   transporterName: string;
  //   transportUserName: string;
  //   weightRange: any;
  //   description: string;

  // apply_uid: number;
  // payment_uid: number;
  // paid: boolean;

  // transporterId: string;
  // transportUserId: string;
}
