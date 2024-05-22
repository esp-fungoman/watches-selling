import styles from "./ProductTag.module.scss";

interface ProductTagProps {
  label: string;
}
const ProductTag = (props: ProductTagProps) => {
  const { label } = props;
  return <div className={styles.wrapper}>{label}</div>;
};

export default ProductTag;
