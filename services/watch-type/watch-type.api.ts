import { message } from "antd";
import Api from "../api";

const list = async (params?: any) => {
  try {
    const res = await Api({
      url: "/watch-type/all",
      method: "GET",
      params: params,
    });
    if (res.status === "OK") {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error) {
    console.error("Error:", error);
  }
};

const WatchTypeApi = { list };
export default WatchTypeApi;
