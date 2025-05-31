import { message } from "antd";
import Api from "../api";
import { User } from "./user.type";

const getMe = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const res: any = await Api({
      url: "/v1/users/my",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res.user;
  } catch (error: any) {
    message.error("Something wrong!");
    message.error(error?.message);
    return null;
  }
};

const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const res: any = await Api({
      url: "/v1/users/my",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res.user;
  } catch (error: any) {
    message.error("Something wrong!");
    message.error(error?.message);
    return null;
  }
};

const update = async (payload: any) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const res = await Api({
      url: "/v1/users",
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
      data: payload,
    });
    console.log("🚀 ~ update ~ res:", res);

    return res;
  } catch (error: any) {
    message.error("Something wrong!");
    message.error(error?.message);
    return null;
  }
};

export default { getMe, update, getProfile };
