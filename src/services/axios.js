import axios from "axios";

const generateAxiosInstance = async (contentType = null, isToken = false) => {
  let header = {
    "content-type": contentType ? contentType : "application/json"
  }
  if(isToken) {
    const token = localStorage.getItem('jwt');
    header.Authorization = `Bearer ${token}`
  }
  return new Promise((resolve) => {
    const instance = axios.create({
      baseURL: "/API",
      headers: header,
    });

    resolve(instance);
  });
};

export default generateAxiosInstance;
