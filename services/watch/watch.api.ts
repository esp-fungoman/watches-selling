import { message } from "antd";
import Api from "../api";

const RESOURCE_API_URI: string = "/v1/products";

const list = async (params?: any) => {
  try {
    const res: any = await Api({
      url: RESOURCE_API_URI,
      method: "GET",
      params: params,
    });
    // TODO: add response status check
    // message.error("Something wrong!");
    return res;
  } catch (error) {
    message.error("Something wrong!");
    console.error("Error:", error);
  }
};

const detail = async (id: string) => {
  try {
    const res = await Api({
      url: `${RESOURCE_API_URI}/${id}`,
      method: "GET",
    });
    console.log("🚀 ~ detail ~ res:", res);

    return res;
  } catch (error) {
    message.error("Something wrong!");
    console.error("Error:", error);
    throw error;
  }
};

const WatchApi = { list, detail };

export default WatchApi;
