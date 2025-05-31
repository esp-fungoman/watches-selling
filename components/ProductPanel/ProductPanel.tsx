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
          src={product.assets?.[0]}
          layout="fill"
          alt="img"
        />
      </div>

      <div className={styles.sub_title}>
        <div className={styles.sale_tag}>{product.brand?.name}</div>
      </div>

      <div className={styles.title}>{product?.name}</div>

      <div className={styles.price}>
        <div className={styles.show_price}>
          {product.saled_price
            ? product.saled_price
            : formatPrice(product.price)}
        </div>
        <div className={styles.origin_price}>
          {product.saled_price ? product.price : ""}
        </div>
      </div>
    </div>
  );
};

export default ProductPanel;
