import {
  SignInPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  AuthResponse,
  ChangePasswordPayload,
  SignUpPayload,
} from "./auth.type";
import Api from "../api";
import { message } from "antd";

const AUTH_RESOURCE_URI: string = "/v1/auth";

const signUp = async (data: SignUpPayload) => {
  try {
    const res = await Api<AuthResponse>({
      url: `${AUTH_RESOURCE_URI}/sign-up`,
      method: "POST",
      data: data,
    });
    console.log("🚀 ~ signUp ~ res:", res);
  } catch (error) {
    message.error("Something wrong!");
    console.error("Error:", error);
  }
};

const signIn = async (dataParams: SignInPayload) => {
  try {
    const res = await Api<AuthResponse>({
      url: `${AUTH_RESOURCE_URI}/sign-in`,
      method: "POST",
      data: dataParams,
    });
    console.log("🚀 ~ signIn ~ res:", res);

    if (!res.data.access_token) {
      message.error("Something wrong with the request!");
      console.log("Request missing access token");
      return;
    }

    const token: string = res.data.access_token;
    localStorage.setItem("token", token);
    message.success("Sign in successfully");
    return res.data.user;
  } catch (error) {
    message.error("Something wrong with the request!");
    message.error(`Error: ${error}`);
  }
};

const signOut = async () => {
  try {
    localStorage.removeItem("token");
    message.success("Sign out successfully");
    return true;
  } catch (error) {
    message.error("Something went wrong during sign out!");
    return false;
  }
};

const recoverPassword = async (data: ForgotPasswordPayload) => {
  try {
    const res = await Api<{ message: string }>({
      url: `${AUTH_RESOURCE_URI}/recover-password`,
      method: "POST",
      data,
    });
    if (res.status === 200) {
      message.success("Recovery email sent");
      return res.data;
    }
    message.error("Something went wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message || "Something went wrong!");
    return null;
  }
};

const resetPassword = async (data: ResetPasswordPayload) => {
  try {
    const res = await Api<{ message: string }>({
      url: `${AUTH_RESOURCE_URI}/reset-password`,
      method: "POST",
      data,
    });
    if (res.status === 200) {
      message.success("Reset password successfully");
      return res.data;
    }
    message.error("Something went wrong!");
    return null;
  } catch (error: any) {
    message.error(error?.message || "Something went wrong!");
    return null;
  }
};

const changePassword = async (data: any) => {
  try {
    const res = await Api<{ message: string }>({
      url: `${AUTH_RESOURCE_URI}/update-password`,
      method: "PATCH",
      data: {
        email: data.email,
        current_password: data.currentPassword,
        new_password: data.password,
      },
    });
    if (res) {
      message.success("Change password successfully");
      return true;
    }
    message.error("Something went wrong!");
    return false;
  } catch (error: any) {
    message.error(error?.message || "Something went wrong!");
    return false;
  }
};

const AuthApi = {
  signUp,
  signIn,
  signOut,
  recoverPassword,
  resetPassword,
  changePassword,
};

export default AuthApi;
