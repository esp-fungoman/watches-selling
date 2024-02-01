import { message } from "antd";
import {
  SignInPayload,
  ForgotPasswordPayload,
  ResetPasswordPayload,
  AuthResponse,
} from "./auth.type";
import Api from "../api";

const signUp = async (dataParams: any) => {
  const body = {
    data: {
      ...dataParams,
    },
  };

  const url = `
  https://de8e-14-169-3-223.ngrok-free.app/auth/sign-up`;

  try {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTcwNjcxNTgxN30._MFA4agi7_sfOjU4VK9EMK3pU-Anjh8BpbWnScSImwg";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(body),
    });
    console.log("response", response);
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }

    const responseData = await response.json();
    console.log("data", responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

const signIn = async (dataParams: SignInPayload) => {
  const body = {
    data: {
      ...dataParams,
    },
  };

  const url = `
  https://de8e-14-169-3-223.ngrok-free.app/auth/sign-in`;

  try {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQGdtYWlsLmNvbSIsImlhdCI6MTcwNjcxNTgxN30._MFA4agi7_sfOjU4VK9EMK3pU-Anjh8BpbWnScSImwg";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: token,
      },
      body: JSON.stringify(body),
    });
    console.log("response", response);
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return null;
    }

    const responseData = await response.json();
    console.log("data", responseData);
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

      const token = resData.jwt;

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
