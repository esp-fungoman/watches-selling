import Api from "../api";
import { ICategory } from "./";
import { message, notification } from "antd";

const getCategoryList = async (params?: any) => {
  try {
    const res = await Api({
      url: "/v1/categories",
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
const getCategoryDetailBySlug = async (slug: string) => {
  try {
    const res = await Api({
      url: `/v1/categories/slug/${slug}`,
      method: "GET",
    });
    if (res) {
      return res;
    }
    return null;
  } catch (error: any) {
    notification.error({
      message: "Category Not Found",
    });
    return null;
  }
};

const getCategoryDetail = async (id: string) => {
  try {
    const res = await Api({
      url: `/v1/categories/${id}`,
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
  getCategoryDetailBySlug,
};
