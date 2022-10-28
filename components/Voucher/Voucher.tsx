import Image from 'next/image';
import classNames from 'classnames';

import styles from './Voucher.module.scss'

interface VoucherProps{
  className?: string,
  voucherCode?: string,
  logoUrl?: string,
  voucherContent?: string
}

const Voucher = (props: VoucherProps) => {
  const { className, voucherCode, logoUrl, voucherContent } = props;
  return (
    <div className={classNames(className, styles.voucher_container)}>
      <div className={styles.voucher_wrapper}>
        <div className={styles.voucher_content}>
          <div className={styles.voucher_title}>
            <span>{voucherCode}</span>
            <Image 
              src={logoUrl || require('public/vercel.svg')}
              width={40}
              height={20}
              alt=""
            />
          </div>

          <p>{voucherContent}</p>
        </div>
        
        <div className={styles.save_button}>
          <p>Lưu mã</p>
          <div className={styles.upper_circle_border_wrapper}>
            <div className={styles.upper_circle_border}>
              <div className={styles.inner_circle}></div>
            </div>
          </div>

          <div className={styles.lower_circle_border_wrapper}>
            <div className={styles.upper_circle_border}>
              <div className={styles.inner_circle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Voucher;