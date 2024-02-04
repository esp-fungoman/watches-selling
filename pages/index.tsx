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

const bannerItem = [
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png",
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png",
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png",
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png",
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png",
  },
];

const listItem = [
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: "12",
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12,
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false,
  },
];

const brandItem = [
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: true,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#",
    isMobile: false,
  },
];

const mostSearchCategory = [
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Dưỡng da",
    link: "#",
  },
  {
    title: "Cọ",
    link: "#",
  },
];

const blogItem = [
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:
      "Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê.",
  },
];

const categoryItem = [
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
  {
    logo: "/assets/homepage/category/category-logo.svg",
    title: "serum, mặt nạ, sữa rửa mặt",
    link: "#",
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Header />
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
          {listItem.map((item: any, index: any) => (
            <ProductPanel key={index} product={item} />
          ))}
        </Carousel>
      </SectionLayout>

      <div className={classNames("container", styles.banner_ads_sections)}>
        <Image
          className={styles.banner}
          src="/assets/homepage/banner-ad/pink-ads.png"
          width={480}
          height={265}
          alt=""
        />

        <Image
          className={styles.banner}
          src="/assets/homepage/banner-ad/yellow-ads.png"
          width={480}
          height={265}
          alt=""
        />
      </div>

      <SectionLayout
        title="Hàng Mới Về"
        show={true}
        showAll={false}
        containerClassname="container"
      >
        <Carousel responsive={productPanelResponsive} show={true}>
          {listItem.map((item: any, index: any) => (
            <ProductPanel key={index} product={item} />
          ))}
        </Carousel>
      </SectionLayout>

      <SectionLayout
        show={true}
        title="Phân loại sản phẩm"
        containerClassname="container"
        childrenClassName={styles.category_section}
      >
        {Array.isArray(categoryItem) &&
          categoryItem.map((item: any, index: any) => (
            <div className={styles.category_panel} key={index}>
              <div className={styles.image_wrapper}>
                <Image src={item.logo} width={86} height={78} alt="" />
              </div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
          ))}
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

      <Footer />
    </div>
  );
};

export default Home;
