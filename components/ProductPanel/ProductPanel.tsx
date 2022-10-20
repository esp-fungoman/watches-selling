import styles from "./ProductPanel.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rating } from "@mui/material";
import classNames from "classnames";

interface IProductPanel {
  className?: string,
  product: { [key: string]: any}
}


const ProductPanel = (props: IProductPanel) => {
  const { product, className } = props;
  const router = useRouter();

  const title = product.title.length <= 27 ? product.title : product.title.slice(0, 27) + "...";

  return (
    <div className={classNames(styles.panel, className)} onClick={() => router.push(product.link)}>
      <div className={styles.image_wrapper}>
        <Image 
          className={styles.image}
          src={product.image} 
          width={122} 
          height={102} 
          layout="responsive" 
          alt=""
        />
        <div className={styles.top_tag}>{product.top_tag}</div>
      </div>
      
      <div className={styles.sub_title}>
        <div className={styles.brand_wrapper}> 
          <div className={styles.line}></div>
          <div className={styles.brand}>{product.brand}</div>
        </div>
        <div className={styles.sale_tag}>{product.sale_tag}</div>
      </div>

      <div className={styles.title}>{title}</div>

      <div className={styles.rating}>
        <Rating size="small" value={product.rating.star} readOnly />
        <div className={styles.number}>({product.rating.number})</div>
      </div>

      <div className={styles.price}>
        <div className={styles.show_price}>{product.saled_price ? product.saled_price : product.price}</div>
        <div className={styles.origin_price}>{product.saled_price ? product.price : ""}</div>
      </div>
    </div>
  )
}

export default ProductPanel;