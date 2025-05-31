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
    console.log("🚀 ~ getMe ~ res:", res);
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
      data: {
        first_name: payload.first_name,
        last_name: payload.last_name,
        gender: payload.gender.value,
        date_of_birth: payload.date_of_birth,
        phone_number: payload.phone_number,
      },
    });
    console.log("🚀 ~ update ~ res:", res);

    return res;
  } catch (error: any) {
    console.log("🚀 ~ update ~ error:", error);
    message.error("Something wrong!");
    message.error(error?.message);
    return null;
  }
};

export default { getMe, update };
