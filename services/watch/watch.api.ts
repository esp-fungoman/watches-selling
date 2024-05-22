import { message } from "antd";
import Api from "../api";

const list = async (params?: any) => {
  try {
    const res = await Api({
      url: "/watch/all",
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": true,
        // Authorization: "pac5G1KXvd1AuFQr5po84Kwb2UhGwm6IzI93GbpH",
      },
      params: params,
    });
    if (res.status === 200 || res.status === 202 || res.status === "OK") {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error) {
    console.error("Error:", error);
  }
};

const detail = async (id: string) => {
  try {
    const res = await Api({
      url: `/watch/${id}`,
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    });

    if (res.status === "OK" || res.status === 202) {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

const WatchApi = { list, detail };

export default WatchApi;
