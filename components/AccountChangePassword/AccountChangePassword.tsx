import styles from './AccountChangePassword.module.scss';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Radio from '../../components/Radio/Radio';
import Title from '../../components/Title/Title';
import Icon from '../Icon/Icon';
import { useState } from 'react';

const AccountChangPassword = () => {
  const [isShowOldPass, setIsShowOldPass] = useState(false);
  const [isShowNewPass, setIsShowNewPass] = useState(false);
  const [isShowReNewPass, setIsShowReNewPass] = useState(false);

  return (
    <section className={styles.wrapper}>
      <Title content="Đổi mật khẩu" />
      <div className={styles.row}>
        <p className={styles.text}>Mật khẩu cũ (*)</p>
        <Input
          className={styles.input}
          type={isShowOldPass ? 'text' : 'password'}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowOldPass((isShowOldPass) => !isShowOldPass)
              }
            >
              <Icon icon="eye" size={20} />
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
          type={isShowNewPass ? 'text' : 'password'}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowNewPass((isShowNewPass) => !isShowNewPass)
              }
            >
              <Icon icon="eye" size={20} />
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
          type={isShowReNewPass ? 'text' : 'password'}
          suffix={
            <div
              className={styles.icon}
              onClick={() =>
                setIsShowReNewPass((isShowReNewPass) => !isShowReNewPass)
              }
            >
              <Icon icon="eye" size={20} />
            </div>
          }
          width={426}
          height={48}
        />
      </div>
      <Button
        className={styles.btn}
        variant="basic"
        width={201}
        height={50}
        text="Cập nhật mật khẩu"
      />
    </section>
  );
};

export default AccountChangPassword;
