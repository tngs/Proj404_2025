import axios from "../../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";


//*order                  //Order by user//
export const postApplyByTransportUser = (serviceId, weight, request: RequestServiceApply) => {
  return axios
    .post<ResponseServiceApply>(
      `/transport-apply-service/${serviceId}/applyByTransportUser/option/${weight}`, //?????????
      { body: request }
    )
    .then((response) => {
      console.log("postApplyByTransportUser response", response);
      return response;
    })
    .catch((error) => {
      console.log("postApplyByTransportUser error", error);
      return error;
    });
};
//DONE
//*get unpaid order list //user gets the unpaid order list
export const getGetUnpaidByTransportUser = () => {
  return axios
    .get<ResponseServiceApply[]>("/transport-apply-service/getUnpaidByTransportUser")
    .then((response) => {
      console.log("getGetUnpaidByTransportUser response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetUnpaidByTransportUser error", error);
      return error;
    });
};
//DONE
//*get paid order list //user gets the paid order list
export const getGetPaidByTransportUser = () => {
  return axios
    .get<ResponseServiceApply[]>("/transport-apply-service/getPaidByTransportUser")
    .then((response) => {
      console.log("getGetPaidByTransportUser response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetPaidByTransportUser error", error);
      return error;
    });
};

//DONE
//*orderDetailPage //user get the details of order
export const getGetByApplyId = ({ applyId }) => {
  return axios
    .get<ResponseServiceApply>("/transport-apply-service/getByApplyId" + applyId)
    .then((response) => {
      console.log("getGetByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getGetByApplyId error", error);
      return error;
    });
};

//*                     transporter reports completion
export const getSetCompleteByApplyId = (applyId) => {//applyId
  return axios
    .get<String>("/transport-apply-service/setCompleteByApplyId/" + applyId)
    .then((response) => {
      console.log("getSetCompleteByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getSetCompleteByApplyId error", error);
      return error;
    });
}

//DONE
//*                     user discards the unpaid order 
export const getDeleteByApplyId = (applyId) => {
  return axios
    .get<String>("/transport-apply-service/deleteByApplyId/" + applyId)
    .then((response) => {
      console.log("getDeleteByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("getDeleteByApplyId error", error);
      return error;
    });
}

//*                               user modify unpaid order
export const postUpdateByApplyId = (applyId, request: RequestServiceApply) => {
  return axios
    .post<ResponseServiceApply>("/transport-apply-service/updateByApplyId/" + applyId)
    .then((response) => {
      console.log("postUpdateByApplyId response", response);
      return response;
    })
    .catch((error) => {
      console.log("postUpdateByApplyId error", error);
      return error;
    });
}

