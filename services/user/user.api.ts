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
      url: "/api/customer/me",
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("me", res);
    if (res.status === 200) {
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

export default { getMe, subscribeNewsletter };
