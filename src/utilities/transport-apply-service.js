import axios from "../axios";

export const postApplyByTransportUser = (serviceId, optionNumber) => {
    return axios.post(`/transport-apply-service/${serviceId}/applyByTransportUser/option/${optionNumber}`)//ResponseServiceApply
}