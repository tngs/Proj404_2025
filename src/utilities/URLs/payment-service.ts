import axios from "../../axios";
import {ResponseServiceApplyForPayment,PaymentCallbackRequest} from "./dataTypes";


//* user paying the unpayed order
//TODO make pay button
export const getPayServiceByApplyId = (applyId) => {
  return axios
    .get<ResponseServiceApplyForPayment>("/payment-service/payment-servi/payServiceByApplyId/" + applyId)
    .then((response) => {
      
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//!!!!!skip come back
export const getPayment = () => {
  return axios
    .get<String>("/payment-service/payment/")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};


export const postPayment = (request: PaymentCallbackRequest) => {
  return axios
    .get<String>("/payment-service/payment/")//<IamportResponse<Payment>> // no idea
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};


export const getSuccessPayment = () => {
  return axios
    .get<String>("/payment-service/success-payment/")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};


export const getFailPayment = () => {
  return axios
    .get<String>("/payment-service/fail-payment/")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11