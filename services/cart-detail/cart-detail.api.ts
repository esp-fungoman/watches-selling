import { message } from "antd";
import Api from "../api";
import { data } from "autoprefixer";
const create = async (data?: any) => {
  try {
    const res = await Api({
      url: "/v1/carts/details",
      method: "POST",
      data,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const update = async (id: string, data?: any) => {
  try {
    const res = await Api({
      url: `/cart-detail/update/${id}`,
      method: "PUT",
      data,
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const list = async () => {
  try {
    const res = await Api({
      url: "/v1/carts",
      method: "GET",
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const detail = async (id: string) => {
  try {
    const res = await Api({
      url: `/cart-detail?id=${id}`,
      method: "GET",
    });

    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

const remove = async (id: string) => {
  try {
    const res = await Api({
      url: `/cart-detail/delete/${id}`,
      method: "DELETE",
    });
    if (res.status === 200) {
      return res.data;
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};
const CartDetailApi = { list, detail, create, update, remove };
export default CartDetailApi;
