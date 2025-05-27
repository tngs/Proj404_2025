import axios from "../../axios";
import {ResponseServiceApplyForPayment,PaymentCallbackRequest} from "./dataTypes";

//DONE
//* user paying the unpayed order
//TODO make pay button
export const getPayServiceByApplyId = (applyId) => {
  return axios
    .get<ResponseServiceApplyForPayment>("/payment-service/payment-servi/payServiceByApplyId/" + applyId)
    .then((response) => {
      
      console.log("getPayServiceByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPayServiceByApplyId error", error);
      throw error;
    });
};

//!!!!!skip come back
export const getPayment = () => {
  return axios
    .get<String>("/payment-service/payment/")
    .then((response) => {
      console.log("getPayment response", response);
      return response;
    })
    .catch((error) => {
      console.log("getPayment error", error);
      throw error;
    });
};


export const postPayment = (request: PaymentCallbackRequest) => {
  return axios
    .get<String>("/payment-service/payment/")//<IamportResponse<Payment>> // no idea
    .then((response) => {
      console.log("postPayment response", response);
      return response;
    })
    .catch((error) => {
      console.log("postPayment error", error);
      throw error;
    });
};


export const getSuccessPayment = () => {
  return axios
    .get<String>("/payment-service/success-payment/")
    .then((response) => {
      console.log("getSuccessPayment response", response);
      return response;
    })
    .catch((error) => {
      console.log("getSuccessPayment error", error);
      throw error;
    });
};


export const getFailPayment = () => {
  return axios
    .get<String>("/payment-service/fail-payment/")
    .then((response) => {
      console.log("getFailPayment response", response);
      return response;
    })
    .catch((error) => {
      console.log("getFailPayment error", error);
      throw error;
    });
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11