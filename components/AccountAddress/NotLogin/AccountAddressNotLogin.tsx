import styles from './AccountAddressNotLogin.module.scss';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';
import Button from '../../../components/Button/Button';
import Radio from '../../../components/Radio/Radio';
import Title from '../../../components/Title/Title';
import Icon from '../../Icon/Icon';

const AccountAddressNotLogin = () => {
  const district = [
    {
      label: 'Quận 1',
      value: 'Quận 1',
    },
  ];
  const ward = [
    {
      label: 'Phường 12',
      value: 'Phường 12',
    },
  ];
  const province = [
    {
      label: 'Thành phố Hồ Chí Minh',
      value: 'Thành phố Hồ Chí Minh',
    },
  ];
  return (
    <section className={styles.wrapper}>
      <Title content="Địa chỉ giao hàng" />
      <div className={styles.row}>
        <p className={styles.text}>Số điện thoại (*)</p>
        <Input width={426} height={48} className={styles.input} />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Địa chỉ (*)</p>
        <Input width={426} height={48} className={styles.input} />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Quận/ Huyện</p>
        <Select
          width={426}
          options={district}
          defaultValue={district[0]}
          className={styles.input}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Phường/Xã</p>
        <Select
          width={426}
          options={ward}
          defaultValue={ward[0]}
          className={styles.input}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Thành phố/ Tinh</p>
        <Select
          width={426}
          options={province}
          defaultValue={province[0]}
          className={styles.input}
        />
      </div>
      <div className={styles.row}>
        <p className={styles.text}>Loại địa chỉ</p>
        <div className={styles.radio_group}>
            <Radio label="Nhà riêng"/>
            <Radio label="Công ty" />
        </div>
      </div>
      <Button className={styles.btn} variant='basic' width={241} height={50} text="Cập nhật thông tin"/>
    </section>
  );
};

export default AccountAddressNotLogin;