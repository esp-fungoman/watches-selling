import { useFormik } from "formik";
import Image from "next/image";
import { FC } from "react";

import Button from "../Button";
import Divider from "../Divider";
import Input from "../Input";

// import { isValidEmail } from "../../helper/form.helpers";
import { AuthApi } from "../../services/auth";
import styles from "./Auth.module.scss";

interface SignUpFormProps {
  onCancel?: () => void;
}

const SignUpForm: FC<SignUpFormProps> = ({ onCancel }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", password: "", confirmPassword: "" },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email.trim()) {
        errors.email = "Nhập email của bạn";
      }

      if (!values.password.trim()) {
        errors.password = "Enter your password";
      } else if (values.password.trim()?.length < 8) {
        errors.password = "Password must have more than 8 characters";
      }

      if (values.password.trim() !== values.confirmPassword.trim()) {
        errors.confirmPassword = "Password is not match";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await AuthApi.signUp({
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
      if (res) {
        resetForm();
        onCancel?.();
      }
    },
  });

  function checkAuth() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.sign_in_form}>
      <h3 className="text-center font-semibold text-2xl">Sign Up</h3>
      <Input
        label="Email"
        placeholder="Nhập email của bạn"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        label="Password"
        placeholder="Nhập mật khẩu"
        showEyeIcon
        {...formik.getFieldProps("password")}
        error={formik.touched.password && formik.errors.password}
      />

      <Input
        label="Confirm password"
        placeholder="Xác nhận mật khẩu"
        showEyeIcon
        {...formik.getFieldProps("confirmPassword")}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />

      <div className="flex gap-4 mt-8">
        <Button
          // loading={formik.isSubmitting}
          className="flex-1"
          onClick={formik.submitForm}
        >
Đăng ký        </Button>
        <Button
          className="flex-1"
          type="text"
          variant="danger"
          onClick={onCancel}
        >
          Huỷ
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
