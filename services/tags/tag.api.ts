import Api from "../api";
import { ITag } from ".";
import { notification } from "antd";

const getTagList = async (params?: any) => {
  try {
    const res = await Api({
      url: "/tags",
      method: "GET",
      params: { populate: "deep,2", ...params },
    });

    if (res.data) {
      return res.data;
    }
    notification.error({
      message: "ERROR",
      description: "tag went wrong",
    });
  } catch (error: any) {
    notification.error({
      message: "Error",
      description: error?.message,
    });
  }
};

const getTagDetail = async (id: string) => {
  try {
    const res = await Api({
      url: `/tags/${id}`,
      method: "GET",
    });

    if (res.data) {
      return res.data;
    }
    notification.error({
      message: "Error",
      description: "tag went wrong",
    });
  } catch (error: any) {
    notification.error({ message: "Error", description: error?.message });
  }
};

export default {
  getTagList,
  getTagDetail,
};
