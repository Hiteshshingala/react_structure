import { APIs } from "../constants";
import api from "./api";

const login = async ({ data } = { data: {} }) => {
  let url = APIs.base_Url;
  const method = "post";
  const response = await api({
    url: url + "sign_in",
    method,
    body: data,
  });

  if (response && response.status && response.status === 200) {
    const { data } = response;
    return data;
  }
  return false;
};

const Sign_Up = async ({ data } = { data: {} }) => {
  let url = APIs.base_Url;
  const method = "post";
  const response = await api({
    url: url + "sign_up",
    method,
    body: data,
  });

  if (response && response.status && response.status === 200) {
    const { data } = response;
    return data;
  }
  return false;
};

const Sign_Out = async () => {
  let url = APIs.base_Url;
  const method = "delete";
  const response = await api({
    url: url + "sign_out",
    method,
    isTokenPass: true
  });

  if (response && response.status && response.status === 200) {
    const { data } = response;
    return data;
  }
  return false;
};

export { login, Sign_Up, Sign_Out };
