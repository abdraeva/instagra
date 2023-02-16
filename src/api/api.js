

// REGISTER

import { instance } from "../config/configs";
import { requestPath } from "./requestPath";

export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);