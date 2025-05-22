import axios from "../../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";

export const postApplyByTransportUser = (request: RequestServiceApply) => {
  const { serviceId, optionNumber } = request;
  axios
    .post<ResponseServiceApply>(
      `/transport-apply-service/${serviceId}/applyByTransportUser/option/${optionNumber}`
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
