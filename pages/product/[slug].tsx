import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel/Carousel";
import ProductPanel from "../../components/ProductPanel/ProductPanel";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import { productPanelResponsive } from "../../constant";
import { formatPrice } from "../../helpers/data.helpers";
import { CartDetailApi } from "../../services/cart-detail";
import { WatchApi } from "../../services/watch";
import styles from "./ProductDetail.module.scss";

const ProductDetail: FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [watch, setWatch] = useState<any>({});
  const [watchList, setWatchList] = useState<any[]>([]);
  const [messageApi] = message.useMessage();
  const router = useRouter();
  useEffect(() => {
    const id = router?.asPath?.split("/")[2] as string;
    if (id && id !== "[slug]") {
      WatchApi.detail(id).then((res: any) => {
        console.log("🚀 ~ WatchApi.detail ~ res:", res);

        setWatch(res.product);
      });
    }
  }, [router]);
  const [pagination, setPagination] = useState<any>({
    page: 1,
    pageSize: 5,
    total: 10,
  });
  useEffect(() => {});
  useEffect(() => {
    const getWatchList = async () => {
      let params = {
        page: pagination.page,
        size: pagination.pageSize,
      };
      const watchListData = await WatchApi.list(params);
      if (watchListData) {
        setWatchList(watchListData.products);
      }
    };
    getWatchList();
  }, []);

  const handleAddToCart = async () => {
    try {
      await CartDetailApi.create({
        productId: watch.id,
        // spec_ids: [watch.],
        quantity,
      }).then((res: any) => {
        if (res) {
          router.push("/cart");
          messageApi.success("Thêm vào giỏ hàng thành công");
        }
      });
    } catch (error: any) {
      messageApi.error(error.message);
    }
  };
  const handleQuantityChange = (amount: number) => {
    const newQuantity = Math.max(1, quantity + amount); // Ensure quantity is not less than 1
    setQuantity(newQuantity);
  };

  const onChangeQty = (value: any) => {
    setQuantity(value);
  };
  return (
    <div className="bg-[#FAFAFA] py-[100px]">
      <div className="container flex flex-row bg-white rounded-2xl shadow-md py-[40px]">
        <div className={styles.img_wrapper}>
          {/* TODO: assets viewing */}
          {watch?.assets?.length > 0 && (
            <Image layout="fill" src={watch?.assets[0]} alt="product" />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            {/* {data.categories &&
              data.categories.length > 0 &&
              data.categories.map((category) => (
                <ProductTag label={category.label} />
              ))} */}
          </div>
          <h2 className={styles.title}>{watch?.name}</h2>
          <div className={styles.price}>{formatPrice(watch?.price)}</div>
          <div>{watch?.description}</div>
          <div className="flex justfiy-start items-center gap-2">
            Category: <div>{watch.category?.name}</div>
          </div>
          <div className="flex justfiy-start items-center gap-2">
            Brand: <div>{watch.brand?.name}</div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center mt-2 gap-2">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-2 py-1 rounded-full bg-gray-200"
              >
                <MinusOutlined rev={10} />
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-2 py-1 rounded-full bg-gray-200"
              >
                <PlusOutlined rev={10} />
              </button>
            </div>
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
      <SectionLayout
        title="Hàng Mới Về"
        show={true}
        showAll={false}
        containerClassname="container"
      >
        <Carousel responsive={productPanelResponsive} show={true}>
          {watchList?.length > 0 &&
            watchList.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
        </Carousel>
      </SectionLayout>
    </div>
  );
};

export default ProductDetail;
