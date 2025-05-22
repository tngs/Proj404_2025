import axios from "../../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";

export const postApplyByTransportUser = (request: RequestServiceApply) => {
  const { serviceId, optionNumber } = request;
  return axios.post<ResponseServiceApply>(
    `/transport-apply-service/${serviceId}/applyByTransportUser/option/${optionNumber}`
  );
};
