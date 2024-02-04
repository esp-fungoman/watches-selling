import { message } from "antd";
import {
  SignInPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  AuthResponse,
} from "./auth.type";
import Api from "../api";

const signUp = async (data: SignInPayload) => {
  try {
    const res = await Api<AuthResponse>({
      url: "/auth/sign-up",
      method: "POST",
      data: data,
    });

    if (res.status === 200|| res.status === 202) {
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
    console.log('res', res)
    if (res.status === 200 || res.status === 202) {
      const resData = res.data;
      const token = resData?.token;

      console.log('resData:', resData);
      console.log('token', token);

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
    console.error("Error:", error);
  }
};


const forgotPassword = async (data: ForgotPasswordPayload) => {
  try {
    const res = await Api<{ ok: boolean }>({
      url: "/auth/forgot-password",
      method: "POST",
      data,
    });
    if (res.status === 200) {
      return res.data.ok;
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
      url: "/auth/reset-password",
      method: "POST",
      data,
    });
    if (res.status === 200) {
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

const AuthApi = { signUp, signIn, forgotPassword, resetPassword, signInGoogle };

export default AuthApi;
