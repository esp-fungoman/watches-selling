import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Title from "../Title/Title";
import styles from "./AccountEditInfo.module.scss";
import { DatePicker, message } from "antd";
import dayjs from "dayjs";
import { format } from "date-fns";
import { UserApi } from "../../services/user";
import { useRouter } from "next/router";

interface AccountEditInfoProps {
  personalInfo: {
    id: string;
    citizenId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    dateOfBirth: Date | null;
    address: string;
    taxCode: string;
    isDeleted: boolean;
    photo?: string;
    account: {
      id: string;
      username: string;
      email: string;
      role: string;
      isDeleted: boolean;
    };
  };
  className?: string;
}

const AccountEditInfo = (props: AccountEditInfoProps) => {
  const router = useRouter();
  const { personalInfo, className } = props;
  const [data, setData] =
    useState<AccountEditInfoProps["personalInfo"]>(personalInfo);
  const [formData, setFormData] =
    useState<AccountEditInfoProps["personalInfo"]>(personalInfo);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setData(personalInfo);
    setFormData(personalInfo);
  }, [personalInfo]);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    // Implement save functionality
    console.log("Saving data:", formData);
    await UserApi.update(formData).then((res) => {
      if (res) {
        messageApi.success("Lưu thành công!");
      }
    });

    // Reset the changed state
    setIsChanged(false);
  };

  const genderOptions = [
    { label: "Nam", value: "Nam" },
    { label: "Nữ", value: "Nữ" },
  ];

  const dateFormat = "DD/MM/YYYY";

  return (
    <section className={classNames(styles.wrapper, className)}>
      {contextHolder}
      <Title content="Thông tin cá nhân" />
      <div className={styles.row2}>
        <p className={styles.text}>Email đăng nhập</p>
        <Input
          width={532}
          height={48}
          disabled={true}
          defaultValue={formData.account.email}
          onChange={(e) => handleInputChange("account.email", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Họ và tên</p>
        <Input
          width={532}
          height={48}
          defaultValue={`${formData.firstName} ${formData.lastName}`}
          onChange={(e) => {
            const [firstName, ...rest] = e.target.value.split(" ");
            const lastName = rest.join(" "); // Join the remaining parts to get the last name
            handleInputChange("firstName", firstName);
            handleInputChange("lastName", lastName);
          }}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Số điện thoại</p>
        <Input
          width={532}
          height={48}
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>CCCD</p>
        <Input
          width={532}
          height={48}
          value={formData.citizenId}
          onChange={(e) => handleInputChange("citizenId", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Ngày sinh</p>
        <DatePicker
          defaultValue={dayjs(
            format(new Date(formData.dateOfBirth as Date), "dd/MM/yyyy"),
            dateFormat
          )}
          format={dateFormat}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Giới tính</p>
        <Select
          width={532}
          options={genderOptions}
          value={formData.gender}
          onChange={(value) => handleInputChange("gender", value.value)}
          className={styles.input}
        />
      </div>
      <div className="flex justify-around gap-4 items-center">
        <Button className={styles.btn} onClick={handleSave}>
          Cập nhật thông tin
        </Button>
        <Button
          className={styles.btn}
          onClick={() => router.push("/account/change-password")}
        >
          Thay đổi mật khẩu{" "}
        </Button>
      </div>
      {contextHolder}
    </section>
  );
};

export default AccountEditInfo;
