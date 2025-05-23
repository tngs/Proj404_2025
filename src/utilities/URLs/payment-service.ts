import axios from "../../axios";
import {ResponseServiceApplyForPayment,PaymentCallbackRequest} from "./dataTypes";

export const getPayServiceByApplyId = (applyId) => {
  axios
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


export const getPayment = () => {
  axios
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
  axios
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
  axios
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
  axios
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

