import { message } from "antd";
import Api from "../api";

const create = async (id: string, data: Array<String>) => {
  try {
    const res = await Api({
      url: `/order-detail/new?order_id=${id}`,
      method: "PUT",
      data
    });

    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};

const update = async (data?: any) => {
  try {
    const res = await Api({
      url: "/order-detail/update",
      method: "PATCH",
      data: { data },
    });
    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};

const list = async (data?: any) => {
  try {
    const res = await Api({
      url: "/order-detail/all",
      method: "GET",
    });
    if (res.status === "OK") {
      return res.data;
    }
  } catch (err: any) {
    message.error(err?.message);
  }
};


const OrderDetailApi = { create, update, list }
export default OrderDetailApi