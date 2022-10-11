import Image from 'next/image';
import styles from './AccountProfile.module.scss';
import Icon from "../Icon/Icon";
import classNames from 'classnames';
interface AccountProfileProps {
    src?: string;
    name?: string;
    remain?: number;
    money?: number;
}
const AccountProfile = (props: AccountProfileProps) => {
    const {
        src,
        name,
        remain,
        money,
    } = props;

    return (
        <section className={styles.account_wrapper}>
            <div className={styles.avatar}>
                <Image src={src} alt="avatar" layout ="fill"/>
            </div>
            <span className={styles.member}>Member</span>
            <div className={styles.name}>{name}</div>
            <div className={styles.wallet}>
                <div className={classNames(styles.money)}>
                    <p className={classNames(styles.text_bold, styles.border)}>{money}</p>
                    <p className={classNames(styles.text, styles.border)}>coin</p>
                </div>
                <div className={styles.money}>
                    <p className={styles.text_bold}>{remain}</p>
                    <p className={styles.text}>Số dư</p>
                </div>
            </div>
        </section>
    )
}

export default AccountProfile;