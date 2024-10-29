import Image from "next/image";
import styles from "./AccountProfile.module.scss";
import Icon from "../Icon/Icon";
import classNames from "classnames";
import defaultAvatar from "../../public/images/default-avatar.svg";
interface AccountProps {
  src: string;
  name?: string;
  remain?: number;
  money?: number;
}
const Account = (props: AccountProps) => {
  const { src, name, remain, money } = props;

  return (
    <section className={styles.account_profile_wrapper}>
      <div className={styles.avatar}>
        <Image src={src || defaultAvatar} alt="avatar" layout="fill" />
      </div>
      <div className={styles.name}>{name}</div>
    </section>
  );
};

export default Account;
