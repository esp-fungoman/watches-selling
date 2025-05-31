import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";

import styles from "./BrandPanel.module.scss";

interface BrandPanelProps {
  className?: string;
  logoUrl?: string;
  imgUrl?: string;
  link?: string;
  isMobile?: boolean;
}

const BrandPanel = (props: BrandPanelProps) => {
  const { isMobile, className, logoUrl, imgUrl, link } = props;

  const router = useRouter();

  return (
    <div
      className={classNames(
        className,
        styles.panel,
        !isMobile ? styles.hide : undefined
      )}
      onClick={() => router.push(link || "#")}
    >
      <div className={styles.image_container}>
        <Image
          className={styles.thumbnail}
          src={imgUrl || require("public/vercel.svg")}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default BrandPanel;
