import styles from "./AccountChangePassword.module.scss";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import Radio from "../../components/Radio/Radio";
import Title from "../../components/Title/Title";
import Icon from "../Icon/Icon";
import { useState } from "react";
import classNames from "classnames";
import { AuthApi } from "../../services/auth";
import { message } from "antd";

interface AccountChangePasswordProps {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
const AccountChangPassword = (props: AccountChangePasswordProps) => {
  const [isShowOldPass, setIsShowOldPass] = useState(false);
  const [isShowNewPass, setIsShowNewPass] = useState(false);
  const [isShowReNewPass, setIsShowReNewPass] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [formData, setFormData] = useState<AccountChangePasswordProps>();
  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    // Implement save functionality
    console.log("Saving data:", formData);
    if (formData?.confirmPassword !== formData?.password) {
      message.error("Mật khẩu xác nhận không đúng");
      return;
    }
    await AuthApi.changePassword(formData as AccountChangePasswordProps);

    // Reset the changed state
  };
  return (
    <section className={styles.wrapper}>
      {contextHolder}
      <Title content="Đổi mật khẩu" />
      <div className={styles.row}>
        <p className={styles.text}>Mật khẩu cũ (*)</p>
        <Input
          className={classNames(styles.input)}
          onChange={(e) => handleInputChange("currentPassword", e.target.value)}
          type={isShowOldPass ? "text" : "password"}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowOldPass((isShowOldPass) => !isShowOldPass)
              }
            >
              <Icon name="eye" size={20} />
            </div>
          }
          width={426}
          height={48}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Mật khẩu mới(*)</p>
        <Input
          className={styles.input}
          type={isShowNewPass ? "text" : "password"}
          onChange={(e) => handleInputChange("password", e.target.value)}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowNewPass((isShowNewPass) => !isShowNewPass)
              }
            >
              <Icon name="eye" size={20} />
            </div>
          }
          width={426}
          height={48}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Nhập lại mật khẩu mới (*)</p>
        <Input
          className={styles.input}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
          type={isShowReNewPass ? "text" : "password"}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowReNewPass((isShowReNewPass) => !isShowReNewPass)
              }
            >
              <Icon name="eye" size={20} />
            </div>
          }
          width={426}
          height={48}
        />
      </div>
      <Button className="!w-[300px]" onClick={handleSave}>
        Lưu
      </Button>
    </section>
  );
};

export default AccountChangPassword;
