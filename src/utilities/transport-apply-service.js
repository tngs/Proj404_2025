import axios from "../axios";
import { ResponseServiceApply, RequestServiceApply } from "./dataTypes";

export const postApplyByTransportUser = (serviceId, optionNumber) => {
    return axios.post(`/transport-apply-service/${serviceId}/applyByTransportUser/option/${optionNumber}`)//ResponseServiceApply
}