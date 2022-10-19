import styles from './AccountEditInfo.module.scss';
import Input from '../Input/Input';
import DatePicker from '../DatePicker/DatePicker';
import Button from '../Button/Button';
import Image from 'next/image';
import Icon from '../Icon/Icon';
import Title from '../Title/Title';
import defaultAvatar from '../../public/images/default-avatar.svg';
import { useState } from 'react';
import Select from '../Select/Select';
import classNames from 'classnames';

interface AccountEditInfoProps {
  personalInfo: {
    email: string;
    name: string;
    phone: string;
    img: string;
    // date?: Date;
  };
}

const AccountEditInfo = (props: AccountEditInfoProps) => {
  const { personalInfo } = props;

  const [data, setData] = useState<{
    email: string;
    img: string;
    name: string;
    phone: string;
    // date?: Date;
  }>(personalInfo || {});

  const gender = [
    {
        label: "Male",
        value: "Male",
    },
    {
        label: "Female",
        value: "Female",
    }
  ]

  return (
    <section className={styles.wrapper}>
      <Title content="Chỉnh sửa thông tin cá nhân" />
      <div className={styles.row1}>
        <div className={styles.img}>
          <Image
            src={data.img || defaultAvatar}
            alt="avatar"
            width={72}
            height={72}
            layout="fill"
          />
        </div>
        <Button
          variant="basic"
          width={262}
          height={50}
          text="Thay đổi ảnh đại diện"
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Email đăng nhập</p>
        <Input
          width={532}
          height={48}
          value={data.email}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Họ và tên</p>
        <Input
          width={532}
          height={48}
          value={data.name}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Số điện thoại</p>
        <Input
          width={532}
          height={48}
          value={data.email}
          className={styles.input}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Ngày sinh</p>
        <DatePicker
          variant="filled"
          suffixIcon={true}
          className={classNames(styles.input, styles.date)}
        />
      </div>
      <div className={styles.row2}>
        <p className={styles.text}>Giới tính</p>
        <Select width={532} options={gender} defaultValue={gender[0]} className={styles.input} />
      </div>
      <Button
        className={styles.btn}
        variant="basic"
        width={241}
        height={50}
        text="Cập nhật thông tin"
      />
    </section>
  );
};

export default AccountEditInfo;
