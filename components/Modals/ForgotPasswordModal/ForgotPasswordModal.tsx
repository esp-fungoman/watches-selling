import { useFormik } from "formik";
import { FC, useState } from "react";
import { message, Modal } from "antd";
import Input from "../../Input";
import Button from "../../Button";
import { AuthApi } from "../../../services/auth";
import styles from "./ForgotPasswordModal.module.scss";

interface ForgotPasswordModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: "" },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email.trim()) {
        errors.email = "Nhập email của bạn";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const res = await AuthApi.recoverPassword({ email: values.email });
      setLoading(false);
      console.log("res", res);
      if (res) {
        message.success("Vui lòng kiểm tra email!");
        onClose();
      } else {
        message.error("Gửi email thất bại.");
      }
    },
  });

  return (
    <Modal
      title="Quên mật khẩu"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      //   className="he"
    >
      <div className={styles.forgot_password_modal}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            placeholder="Nhập email của bạn"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          />
          <div className="flex gap-4 mt-8">
            <Button
              onClick={async (e) => {
                e.preventDefault();
                await formik.validateForm();
                formik.handleSubmit();
              }}
              className="flex-1"
              loading={loading}
            >
              Khôi phục mật khẩu
            </Button>
            <Button
              className="flex-1"
              type="text"
              variant="danger"
              onClick={onClose}
            >
              Huỷ{" "}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
