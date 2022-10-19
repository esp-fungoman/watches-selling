import styles from './AccountAddress.module.scss';
import Title from '../../Title/Title';
import Button from '../../Button/Button';
import { useState } from 'react';

interface AccountAddressProps {
  address: {
    id: string | number;
    name: string;
    phone: string;
    address: string;
  }[];
}

const AccountAddress = (props: AccountAddressProps) => {
  const { address } = props;
  const [data, setData] = useState<
    {
      id: string | number;
      name: string;
      phone: string;
      address: string;
    }[]
  >(address || []);
  const [isDefault, setIsDefault] = useState(true);

  return (
    <section className={styles.wrapper}>
      <Title content="Địa chỉ giao hàng" />
      {Array.isArray(data) &&
        data.map((item) => (
          <div key={item.id} className={styles.item_wrapper}>
            <div className={styles.item}>
              <div className={styles.address}>
                <p className={styles.text_bold}>{item.name}</p>
                {isDefault ? (
                  <span className={styles.default}>Mặc định</span>
                ) : (
                  ''
                )}
              </div>
              <p className={styles.text}>{item.phone}</p>
              <p className={styles.text}>{item.address}</p>
            </div>
            <div className={styles.btn_wrapper}>
              <Button
                variant="outlined"
                text="Chỉnh sửa"
                className={styles.btn}
              />
              <Button variant="outlined" text="Xoá" className={styles.btn} />
            </div>
          </div>
        ))}
      <div className={styles.add}>+ Thêm địa chỉ mới</div>
    </section>
  );
};

export default AccountAddress;