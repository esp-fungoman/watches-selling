import { message } from "antd";
import Api from "../api";

const list = async (param?: any) => {
  try {
    const res = await Api({
      url: "/watch-brand/all",
      method: "GET",
    });

    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};

const WatchBrandApi = {list}

export default WatchBrandApi;