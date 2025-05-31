import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

import styles from "./CarouselBanner.module.scss";

interface CarouselBannerProps {
  className?: string;
  children?: any;
  show?: boolean;
}

const CarouselBanner = (props: CarouselBannerProps) => {
  const { className, children, show } = props;
  const router = useRouter();

  return show ? (
    <div className={classNames(styles.carousel, className)}>
      <div className={styles.banner_list}>{children}</div>
    </div>
  ) : null;
};

export default CarouselBanner;
