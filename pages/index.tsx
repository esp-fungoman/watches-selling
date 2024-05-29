import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Carousel from "../components/Carousel/Carousel";
import CarouselBanner from "../components/CarouselBanner/CarouselBanner";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductPanel from "../components/ProductPanel/ProductPanel";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import BrandPanel from "../components/BrandPanel/BrandPanel";
import BlogPanel from "../components/BlogPanel/BlogPanel";
import { productPanelResponsive, blogPanelResponsive } from "../constant";

import styles from "../styles/Home.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import WatchApi from "../services/watch/watch.api";
import { watch } from "fs";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);

const bannerItem = [
  {
    link: "#",
    image: require("/public/banner-2.jpeg"),
  },
  {
    link: "#",
    image: require("/public/banner-4.jpg"),
  },
  {
    link: "#",
    image: require("/public/banner-6.jpeg"),
  },
];

const brandItem = [
  {
    thumbnail:
      "https://topwatch.vn/wp-content/uploads/2020/11/review-dong-ho-curnon-7.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "https://logowik.com/content/uploads/images/520_casio.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail:
      "https://guojewellery.com/cdn/shop/collections/g-shock-logo-vector.png?v=1694033951",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "https://miro.medium.com/max/1400/0*zTCveF1YRYvPJ0at.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail:
      "https://www.thelogocreative.co.uk/wp-content/uploads/omega-min.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail:
      "https://1000logos.net/wp-content/uploads/2018/10/watches-brands-Hublot.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "https://miro.medium.com/max/1400/0*07TCt-SMr7sOK-ma.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1400/0*RW85ZboQDQvOP0pk.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail:
      "https://images-platform.99static.com//ixcwo_uxmyIrVo88RDF6tgIWlCE=/187x0:892x705/fit-in/500x500/99designs-contests-attachments/48/48345/attachment_48345682",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail:
      "https://i.pinimg.com/736x/a7/da/c4/a7dac41ceb6664969199b61a7fdee486.jpg",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
];

const Home: NextPage = () => {
  const router = useRouter();
  const [watchList, setWatchList] = useState<any[]>([]);
  const [latestWatchList, setLatestWatchList] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>({
    page: 1,
    pageSize: 10,
    total: 10,
  });
  useEffect(() => {
    const getWatchList = async () => {
      let params = {
        page: pagination.page,
        size: pagination.pageSize,
      };

      const watchListData = await WatchApi.list(params);
      if (watchListData) {
        setWatchList(watchListData.watches);
        setPagination((prevState: any) => ({
          ...prevState,
          total: watchListData.total,
        }));
      }
    };
    const getLatestWatchList = async () => {
      let params = {
        page: pagination.page,
        size: pagination.pageSize,
        sort_by: "desc",
      };
      const latestWatchListData = await WatchApi.list(params);
      if (latestWatchListData) {
        setLatestWatchList(latestWatchListData.watches);
      }
    };
    getWatchList();
    getLatestWatchList();
  }, []);

  return (
    <div>
      <div>
        <CarouselBanner show={true}>
          {bannerItem.map((item: any, index: any) => (
            <div key={index} onClick={() => router.push(item.link || "")}>
              <Image
                src={item.image || require("public/vercel.svg")}
                layout="responsive"
                width={1440}
                height={482}
                alt=""
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
        {Array.isArray(brandItem) &&
          brandItem.map((item: any, index: any) => (
            <BrandPanel
              className={styles.brand_panel}
              isMobile={item.isMobile}
              key={index}
              imgUrl={item.thumbnail}
              logoUrl={item.logo}
              link={item.link}
            />
          ))}
      </SectionLayout>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
