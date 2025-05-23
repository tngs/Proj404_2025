import axios from "../../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";

export const postApplyByTransportUser = (request: RequestServiceApply) => {
  const { serviceId, weight } = request; //option number
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

export const getGetByTransporterId = (transporterId) => {
  axios
    .get<ResponseServiceApply[]>(`/transport-apply-service/getByTransporterId/${transporterId}`)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
};

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

export const getSetCompleteByApplyId = (applyId) => {
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


export const deleteDeleteByApplyId = (applyId) => {
  axios
    .delete<String>("/transport-apply-service/deleteByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}


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

