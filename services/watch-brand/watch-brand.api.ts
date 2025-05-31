import { message } from "antd";
import Api from "../api";

const list = async (param?: any) => {
  try {
    const res = await Api({
      url: "/v1/brands",
      method: "GET",
    });
    if (!res) {
      console.log("throwed error");
      throw new Error("Cannot get brand data");
    }
    return res;
  } catch (err: any) {
    message.error(err?.message);
  }
};

const WatchBrandApi = { list };

export default WatchBrandApi;
