import { useFormik } from "formik";
import { FC, useState } from "react";
import classNames from "classnames";

import Button from "../Button";
import Input from "../Input";
import styles from "./Auth.module.scss";
import { AuthApi } from "../../services/auth";
import useAuth from "../../hooks/useAuth";
import ForgotPasswordModal from "../Modals/ForgotPasswordModal/ForgotPasswordModal";

interface SignInFormProps {
  onCancel?: () => void;
}

const SignInForm: FC<SignInFormProps> = ({ onCancel }) => {
  const checkAuth = useAuth();
  const [isShowModalForgotPassword, setIsShowModalForgotPassword] =
    useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", password: "" },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email.trim()) {
        errors.email = "Nhập email của bạn";
      }

      if (!values.password.trim()) {
        errors.password = "Enter your password";
      }

      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await AuthApi.signIn({
        email: values.email,
        password: values.password,
      });
      if (res) {
        resetForm();
        onCancel?.();
      }
    },
  });

  return (
    <div className={styles.auth_container}>
      <div className={classNames(styles.sign_in_form, {})}>
        <h3 className="text-center font-semibold text-2xl">Đăng nhập</h3>
        <Input
          label="Email"
          placeholder="Nhập email của bạn"
          {...formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />
        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            placeholder="Enter your pasword"
            showEyeIcon
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          />
          <div
            className="cursor-pointer"
            onClick={() => setIsShowModalForgotPassword(true)}
          >
            Quên mật khẩu?
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <Button className="flex-1" onClick={formik.submitForm}>
            Đăng nhập
          </Button>
          <Button
            className="flex-1"
            type="text"
            variant="danger"
            onClick={() => {
              setIsShowModalForgotPassword(false);
              onCancel?.();
            }}
          >
            Huỷ
          </Button>
        </div>
      </div>
      <ForgotPasswordModal
        isVisible={isShowModalForgotPassword}
        onClose={() => setIsShowModalForgotPassword(false)}
      />
    </div>
  );
};

export default SignInForm;
