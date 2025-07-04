import axios from "../../axios";
import { store } from "../../redux/reducers";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";
import errors from "./errors.json";

//DONE
//*order                  //Order by user//
export const postApplyByTransportUser = (serviceId, weight, body) => {
  console.log(body);
  const token = store.getState()?.account?.token;
  const localDate = new Date().toISOString().split("T")[0];
  // console.log({departure: body.departure, destination: body.destination, description: body.description, date: localDate});
  return axios
    .post<ResponseServiceApply>(
      `/transport-apply-service/${serviceId}/applyByTransportUser/option/${weight}`,
      {
        departure: body.departure,
        destination: body.destination,
        description: body.description,
        date: localDate,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("postApplyByTransportUser");
      return response;
    })
    .catch((error) => {
      console.log("postApplyByTransportUser error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};
//DONE
//*get unpaid order list //user gets the unpaid order list
export const getGetUnpaidByTransportUser = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseServiceApply[]>(
      "/transport-apply-service/getUnpaidByTransportUser",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getGetUnpaidByTransportUser");
      return response;
    })
    .catch((error) => {
      console.log("getGetUnpaidByTransportUser error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};
//DONE
//*get paid order list //user gets the paid order list
export const getGetPaidByTransportUser = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get<ResponseServiceApply[]>(
      "/transport-apply-service/getPaidByTransportUser",
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("getGetPaidByTransportUser", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetPaidByTransportUser error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

//DONE
//*orderDetailPage //user get the details of order
export const getGetByApplyId = ({ applyId }) => {
  return axios
    .get<ResponseServiceApply>(
      "/transport-apply-service/getByApplyId/" + applyId
    )
    .then((response) => {
      console.log("getGetByApplyId");
      return response;
    })
    .catch((error) => {
      console.log("getGetByApplyId error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

//transportertransporter
//*                     transporter reports completion
export const getSetCompleteByApplyId = (applyId) => {
  const token = store.getState()?.account?.token;
  //applyId
  return axios
    .get<String>("/transport-apply-service/setCompleteByApplyId/" + applyId, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("getSetCompleteByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getSetCompleteByApplyId error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

//DONE
//*                     user discards the unpaid order
export const getDeleteByApplyId = (applyId) => {
  const token = store.getState()?.account?.token;
  return axios
    .get<String>("/transport-apply-service/deleteByApplyId/" + applyId, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("getDeleteByApplyId");
      return response;
    })
    .catch((error) => {
      console.log("getDeleteByApplyId error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

//DONE
//*                               user modify unpaid order
export const postUpdateByApplyId = (applyId, body: RequestServiceApply) => {
  const token = store.getState()?.account?.token;
  return axios
    .post<ResponseServiceApply>(
      "/transport-apply-service/updateByApplyId/" + applyId,
      body,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    )
    .then((response) => {
      console.log("postUpdateByApplyId");
      return response;
    })
    .catch((error) => {
      console.log("postUpdateByApplyId error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};

export const getGetAppliesByTransporter = () => {
  const token = store.getState()?.account?.token;
  return axios
    .get(`/transport-apply-service/getAppliesByTransporter`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      console.log("getGetAppliesByTransporter response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetAppliesByTransporter error", error);
      if (errors[error.status]) {
        console.log(error.status);
        error.error = errors[error.status].message;
        error.message = errors[error.status].friendly;
      }
      if(error.code=="ERR_NETWORK"){
        error.error = "Network Error";
        error.message = "Somthing wrong with the network. Please check you internet!";
      } 
      throw error;
    });
};
