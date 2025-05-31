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
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    gender: string;
    date_of_birth: Date | null;
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

  const handleInputChange = (key: string, value: string | Date | null) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setIsChanged(true);
  };

  const handleSave = async () => {
    await UserApi.update(formData).then((res) => {
      if (res) {
        messageApi.success("Successfully saved!");
      } else {
        message.error("Error saving");
      }
    });

    setIsChanged(false);
  };

  const genderOptions = [
    { label: "Nam", value: "MALE" },
    { label: "Nữ", value: "FEMALE" },
    { label: "Khác", value: "OTHER" },
  ];

  const dateFormat = "DD/MM/YYYY";

  return (
    <section className={classNames(styles.wrapper, className)}>
      <Title content="Thông tin cá nhân" />
      <div className={styles.row2}>
        <p className={styles.text}>Email</p>
        <Input
          width={532}
          height={48}
          defaultValue={formData.email}
          className={styles.input}
          readOnly={true}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Họ và tên</p>
        <Input
          width={532}
          height={48}
          defaultValue={`${formData.first_name} ${formData.last_name}`}
          onChange={(e) => {
            const [first_name, ...rest] = e.target.value.split(" ");
            const last_name = rest.join(" ");
            handleInputChange("first_name", first_name);
            handleInputChange("last_name", last_name);
          }}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Số điện thoại</p>
        <Input
          width={532}
          height={48}
          value={formData.phone_number}
          onChange={(e) => handleInputChange("phone_number", e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Ngày sinh</p>
        <DatePicker
          value={formData.date_of_birth ? dayjs(formData.date_of_birth) : null}
          format={dateFormat}
          onChange={(date) => {
            handleInputChange("date_of_birth", date ? date.toDate() : null);
          }}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Giới tính</p>
        <Select
          width={532}
          options={genderOptions}
          value={formData.gender}
          onChange={(value) => handleInputChange("gender", value)}
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
