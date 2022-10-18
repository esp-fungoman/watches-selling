import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";

import styles from "./BlogPanel.module.scss";

interface BlogPanelProps {
  className?: string,
  title?: string,
  category?: string,
  imgUrl?: string,
  link?: string,
  description?: string
}

const BlogPanel = (props: BlogPanelProps) => {
  const {
    className,
    title,
    imgUrl,
    link,
    category,
    description
  } = props;

  const router = useRouter();

  return (
    <div className={classNames(styles.panel, className)}>
      <div className={styles.image_wrapper}>
        <Image 
          className={styles.image}
          src={imgUrl || require("public/vercel.svg")} 
          width={229} 
          height={146} 
          layout="responsive" 
          alt=""
        />
      </div>
      
      <div className={styles.sub_title}>
        <div className={styles.category_wrapper}> 
          <div className={styles.line}></div>
          <div className={styles.category}>{category}</div>
        </div>
      </div>

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>
        {description}
      </p>

      <p className={styles.read_more}  onClick={() => router.push(link || "#")}>Đọc tiếp</p>
    </div>
  )
}

export default BlogPanel;