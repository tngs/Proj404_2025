import axios from "../axios";
import {TransportUser,ResponseTransportUser} from "./dataTypes";

export const postLogin = (user: TransportUser) => {
    return axios.post<ResponseTransportUser>("/transport-user-service/login");
}