import axios from "../../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";


//*order                  //Order by user//
export const postApplyByTransportUser = (serviceId, weight, request: RequestServiceApply) => {
  axios
    .post<ResponseServiceApply>(
      `/transport-apply-service/${serviceId}/applyByTransportUser/option/${weight}`, //?????????
      { body: request }
    )
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*get unpaid order list //user gets the unpaid order list
export const getGetUnpaidByTransportUser = () => {
  axios
    .get<ResponseServiceApply[]>("/transport-apply-service/getUnpaidByTransportUser")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*get paid order list //user gets the paid order list
export const getGetPaidByTransportUser = () => {
  axios
    .get<ResponseServiceApply[]>("/transport-apply-service/getPaidByTransportUser")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*orderDetailPage //user get the details of order
export const getGetByApplyId = ({ applyId }) => {
  axios
    .get<ResponseServiceApply>("/transport-apply-service/getByApplyId" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

//*                     transporter reports completion
export const getSetCompleteByApplyId = (applyId) => {//applyId
  axios
    .get<String>("/transport-apply-service/setCompleteByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//*                     user discards the unpaid order 
export const getDeleteByApplyId = (applyId) => {
  axios
    .get<String>("/transport-apply-service/deleteByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

//*                               user modify unpaid order
export const postUpdateByApplyId = (applyId, request: RequestServiceApply) => {
  axios
    .post<ResponseServiceApply>("/transport-apply-service/updateByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

