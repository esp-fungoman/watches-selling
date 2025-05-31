import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductPanel from "../components/ProductPanel/ProductPanel";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import BrandPanel from "../components/BrandPanel/BrandPanel";
import { productPanelResponsive } from "../constant";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import WatchApi from "../services/watch/watch.api";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import { WatchBrandApi } from "../services/watch-brand";
import { CategoryApi } from "../services/categories";
import { isArray } from "lodash";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const Home: NextPage = () => {
  const router = useRouter();
  const [latestWatchList, setLatestWatchList] = useState<any[]>([]);
  const [watchList, setWatchList] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [luxuryCategory, setLuxuryCategory] = useState<any>({});
  const [pagination, setPagination] = useState<any>({
    page: 1,
    pageSize: 10,
    total: 10,
  });
  useEffect(() => {
    const getWatchList = async () => {
      let params = {
        page: pagination.page,
        size: pagination.per_page,
      };

      const watchListData = await WatchApi.list(params);
      if (watchListData) {
        setWatchList(watchListData.products);
        setPagination((prevState: any) => ({
          ...prevState,
          total: watchListData.pagination.total_pages,
        }));
      }
    };
    const getLatestWatchList = async () => {
      let params = {
        page: pagination.page,
        size: pagination.per_page,
        sort_by: "desc",
      };
      const latestWatchListData = await WatchApi.list(params);
      if (latestWatchListData) {
        setLatestWatchList(latestWatchListData.products);
      }
    };
    const getBrands = async () => {
      const response: any = await WatchBrandApi.list();
      if (response) {
        setBrands(response.brands);
      }
    };
    const getLuxuryCategory = async () => {
      const response: any = await CategoryApi.getCategoryDetailBySlug("luxury");
      if (response) {
        setLuxuryCategory(response.category);
      }
    };
    getWatchList();
    getLatestWatchList();
    getBrands();
    getLuxuryCategory();
  }, []);

  return (
    <div>
      <div>
        <CarouselBanner show={true}>
          {isArray(luxuryCategory.assets) &&
            luxuryCategory.assets.map((item: any, index: any) => (
              <div key={index} onClick={() => router.push(item || "")}>
                <Image
                  src={item || require("public/vercel.svg")}
                  width={640}
                  height={380}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
        </CarouselBanner>
      </div>

      <SectionLayout
        title="Flash deal"
        show={true}
        showAll={false}
        childrenClassName={styles.flash_deal}
        containerClassname="container"
        backgroundImage="/assets/homepage/section-layout/background-image.png"
      >
        <Carousel responsive={productPanelResponsive} show={true}>
          {watchList.length > 0 &&
            watchList.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
        </Carousel>
      </SectionLayout>

      <SectionLayout
        title="Hàng Mới Về"
        show={true}
        showAll={false}
        containerClassname="container"
      >
        <Carousel responsive={productPanelResponsive} show={true}>
          {latestWatchList.length > 0 &&
            latestWatchList.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
        </Carousel>
      </SectionLayout>

      <SectionLayout
        show={true}
        title="Thương hiệu nổi bật"
        containerClassname="container"
        childrenClassName={styles.brand_section}
      >
        {Array.isArray(brands) &&
          brands.map((item: any, index: any) => {
            return (
              <BrandPanel
                className={styles.brand_panel}
                key={index}
                imgUrl={item.assets[0]}
                link={item.link}
              />
            );
          })}
      </SectionLayout>
    </div>
  );
};

export default Home;
