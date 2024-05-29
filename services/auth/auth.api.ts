import {
  SignInPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  AuthResponse,
  ChangePasswordPayload,
} from "./auth.type";
import Api from "../api";
import { message } from "antd";

const signUp = async (data: SignInPayload) => {
  try {
    const res = await Api<AuthResponse>({
      url: "/auth/sign-up",
      method: "POST",
      data: data,
    });

    if (res.status === 200 || res.status === 202 || res.status === "OK") {
      localStorage.setItem("token", res?.data?.token);
      message.success("Sign up successfully!");
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error) {
    console.error("Error:", error);
  }
};

const signIn = async (dataParams: SignInPayload) => {
  try {
    const res = await Api<AuthResponse>({
      url: "/auth/sign-in",
      method: "POST",
      data: dataParams,
    });
    console.log("res", res);
    if (res.status === 200 || res.status === 202 || res.status === "OK") {
      const resData = res.data;
      const token = resData?.token;

      if (token) {
        localStorage.setItem("token", token);
        message.success("Sign in successfully");
        return resData;
      } else {
        // Handle the case where the token is not present
        message.error("Token not found in the response");
        return null;
      }
    } else {
      // Handle the case where the status is neither 200 nor 202
      message.error("Something wrong with the request!");
      return null;
    }
  } catch (error) {
    message.error(error?.message);
  }
};

const recoverPassword = async (data: ForgotPasswordPayload) => {
  try {
    const res = await Api<{ ok: boolean }>({
      url: "/auth/recover-password",
      method: "POST",
      data,
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

const resetPassword = async (data: ResetPasswordPayload) => {
  try {
    const res = await Api<{ data: { message: string }; status: boolean }>({
      url: "/accounts/password",
      method: "POST",
      data,
    });
    if (res.status === "OK") {
      message.success("Reset password successfully");
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message);
    return null;
  }
};

const changePassword = async (data: ChangePasswordPayload) => {
  try {
    const res = await Api<any>({
      url: "/accounts/change-password",
      method: "POST",
      data,
    });
    if (res.status === "OK") {
      message.success("Đổi mật khẩu thành công");
      return res.data;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message);
    return null;
  }
};

const signInGoogle = async (query: any) => {
  try {
    const res = await Api<AuthResponse>({
      url: `/auth/google/callback${query}`,
      method: "GET",
    });
    if (res.status === 200) {
      const resData = res.data;

      const token = resData.token;

      if (token) {
        localStorage.setItem("token", token);
      }
      message.success("Sign in successfully");
      return resData;
    }
    message.error("Something wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message);
    return null;
  }
};

const AuthApi = {
  signUp,
  signIn,
  recoverPassword,
  resetPassword,
  signInGoogle,
  changePassword,
};

export default AuthApi;
