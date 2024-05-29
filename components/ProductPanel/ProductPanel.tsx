import styles from "./ProductPanel.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rating } from "@mui/material";
import classNames from "classnames";
import { formatPrice } from "../../helpers/data.helpers";

interface IProductPanel {
  className?: string;
  product: any;
}

const ProductPanel = (props: IProductPanel) => {
  const { product, className } = props;
  const router = useRouter();

  const title =
    product.name?.length <= 27
      ? product.name
      : product.name?.slice(0, 27) + "...";

  return (
    <div
      className={classNames(styles.panel, className, "cursor-pointer")}
      onClick={() => router.push("/product/" + product.id)}
    >
      <div className={styles.image_wrapper}>
        <Image
          className={styles.image}
          src={
            product.photo ||
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=ajJYOEQxYjNlejNwbWNnSU16d0NYaWhSbVIzRFJTYlp1MEk4OWNDaTcvNTlEbzMrd1Z5SUpEd0hiT0ZLRlZGNGRCU0luK254NGZZeFNSZCtCaXAxdG5LTGp0WU11cGJPRVJHSFVxWTAxK1diaytyMkV2UXJqeE9wOUlGWnU0cExJQ3VXcFZIUHhBMlU5OU5QT1pyZjQ3WlBtR0ZPUkFPYlc1NC9nRzhiVTZUYlg5SUJPR0VaZnV5YVlTck5WQzFJWitOTEs5T0laM0FBYmtOdWx0aUJtTm5YU0ZMdUpkZktWZmlmcG5VMHJzOD0"
          }
          layout="fill"
          alt="img"
        />
        {/* {product.type && <div className={styles.top_tag}>{product.type}</div>} */}
      </div>

      <div className={styles.sub_title}>
        {/* <div className={styles.brand_wrapper}>
          <div className={styles.line}></div>
          <div className={styles.brand}>{product.brand}</div>
        </div> */}
        <div className={styles.sale_tag}>{product.brand?.name}</div>
      </div>

      <div className={styles.title}>{product?.name}</div>

      <div className={styles.price}>
        <div className={styles.show_price}>
          {product.saled_price
            ? product.saled_price
            : formatPrice(product.price)}
          đ
        </div>
        <div className={styles.origin_price}>
          {product.saled_price ? product.price : ""}
        </div>
      </div>
    </div>
  );
};

export default ProductPanel;
