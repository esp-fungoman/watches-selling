import Api from "../api";
import { ICategory } from "./";
import { notification } from "antd";

const getCategoryList = async (params?: any) => {
  try {
    const res = await Api({
      url: "/categories",
      method: "GET",
      params: { populate: "deep,2", ...params },
    });

    if (res.data) {
      return res.data;
    }
    notification.error({
      message: "ERROR",
      description: "category went wrong",
    });
  } catch (error: any) {
    notification.error({
      message: "Error",
      description: error?.message,
    });
  }
};

const getCategoryDetail = async (id: string) => {
  try {
    const res = await Api({
      url: `/categories/${id}`,
      method: "GET",
    });

    if (res.data) {
      return res.data;
    }
    notification.error({
      message: "Error",
      description: "category went wrong",
    });
  } catch (error: any) {
    notification.error({ message: "Error", description: error?.message });
  }
};

export default {
  getCategoryList,
  getCategoryDetail,
};
