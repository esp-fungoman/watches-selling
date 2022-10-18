import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";

import styles from "./BrandPanel.module.scss";

interface BrandPanelProps {
  className?: string,
  logoUrl?: string,
  imgUrl?: string,
  link?: string,
  isMobile?: boolean
}

const BrandPanel = (props: BrandPanelProps) => {
  const {
    isMobile,
    className,
    logoUrl,
    imgUrl,
    link
  } = props;

  const router = useRouter();

  return (
    <div className={classNames(className, styles.panel, !isMobile ? styles.hide: undefined)} onClick={() => router.push(link || "#")}>
      <Image 
        className={styles.thumbnail}
        src={imgUrl || require("public/vercel.svg")} 
        layout="responsive"
        width={171}
        height={138}
        alt=""
      />
      <div className={styles.logo_container}>
        <div className={styles.logo_wrapper}>
          <Image 
            className={styles.logo}
            src={logoUrl || require("public/vercel.svg")} 
            layout="responsive"
            width={130}
            height={31}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default BrandPanel;