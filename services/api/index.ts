import axios, { AxiosInstance } from "axios";
import qs from "qs";

const Api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

Api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  console.log("api token: ", token);
  if (token) {
    console.log("case 1", {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      paramsSerializer: {
        serialize: (params: any) => qs.stringify(params, { encode: false }),
      },
    });
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { encode: false }),
      },
    };
  }

  return {
    ...config,
    paramsSerializer: {
      serialize: (params) => qs.stringify(params, { encode: false }),
    },
  };
});

Api.interceptors.response.use(
  (res: any) => {
    return res.data;
  },
  function (err) {
    console.log(err);

    const status = err?.response?.status;
    const message = err?.response?.data?.error?.message;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      // window.location.href = "/sign-in";
    }
    return Promise.reject(new Error(message));
  }
);

export default Api;
