import { message } from "antd";
import Api from "../api";
import { User } from "./user.type";

const getMe = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const res = await Api({
      url: "/accounts/me",
      method: "GET",
      headers: {  
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });

    if (res.status === "OK") {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
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
    const res = await Api({
      url: "/customer/profile",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
    });

    if (res.status === "OK") {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
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
      url: "/customer/update",
      method: "PUT",
      headers: {  
        Authorization: `Bearer ${token}`,
        "ngrok-skip-browser-warning": "true",
      },
      data: payload
    });

    if (res.status === "OK") {
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message);
    return null;
  }
};

const subscribeNewsletter = async (email: string) => {
  try {
    const res = await Api({
      url: "/subscribers",
      method: "POST",
      data: {
        data: { email },
      },
    });
    if (res.status === 200) {
      message.success("Subscribed successfully!");
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message);
    return null;
  }
};

export default { getMe, subscribeNewsletter, update, getProfile };
