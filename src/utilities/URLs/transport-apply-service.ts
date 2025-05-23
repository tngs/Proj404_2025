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
    .get<ResponseServiceApply[]>(`/getByTransporterId/${transporterId}`)
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
    .get<ResponseServiceApply[]>("/getUnpaidByTransportUser")
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
    .get<ResponseServiceApply[]>("/getPaidByTransportUser")
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
    .get<ResponseServiceApply>("/getByApplyId" + applyId)
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
    .get<String>("/setCompleteByApplyId/" + applyId)
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
    .delete<String>("/deleteByApplyId/" + applyId)
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
    .post<ResponseServiceApply>("/updateByApplyId/" + applyId)
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
}

