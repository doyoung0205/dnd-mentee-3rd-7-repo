import { AxiosInstance, AxiosRequestConfig } from "axios";
import { SignState } from "@/store/sign/types";
import { sign } from "@/store/sign/index";
import { getRefToken } from "@/api/token";
import { TokenRef, DecodedToken } from "@/api/token/type";
import JwtDecode from "jwt-decode";
import {
  getAuthFromCookie,
  saveAuthToCookie,
  saveRefreshToLocal
} from "@/utils/cookies";

export function setInterceptors(instance: AxiosInstance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    async function(config: AxiosRequestConfig) {
      // Do something before request is sent
      // console.log(config);
      console.log(
        "(sign.state as SignState).token;",
        (sign.state as SignState).token
      );
      const token = (sign.state as SignState).token;
      const decodedToken = JwtDecode(token) as DecodedToken;
      const now = new Date().toString();
      const expDate = new Date(decodedToken["exp"] * 1000).toString();

      if (expDate < now) {
        const refreshToken = localStorage.getItem("refreshToken");
        const data = { refresh: refreshToken } as TokenRef;
        const newToken = await getRefToken(data);

        saveAuthToCookie(newToken.data.access);
        saveRefreshToLocal(newToken.data.refresh);
      }

      config.headers.Authorization =
        "Bearer " + (sign.state as SignState).token;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return instance;
}
