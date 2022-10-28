import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { productPanelResponsive } from "../../constant";

import styles from "styles/ProductListing.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Voucher from "../../components/Voucher/Voucher";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import Carousel from "../../components/Carousel/Carousel";
import ProductPanel from "../../components/ProductPanel/ProductPanel";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

const bannerItem = [
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png"
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png"
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png"
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png"
  },
  {
    link: "#",
    image: "/assets/homepage/banner/banner.png"
  }
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
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: "12"
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  },
  {
    image: "/assets/homepage/shopping-item/item-thumbnail.png",
    link: "#",
    brand: "LANEIGE",
    sale_tag: "-40%",
    title: "Kem dưỡng da chiết xuất hoa lan tuyết Jeju Hàn Quốc",
    rating: {
      star: 5,
      number: 12
    },
    saled_price: "200 000đ",
    price: "950 000đ",
    top_tag: "Hot deal",
    sold_out: false
  }
];

const brandItem = [
  {
    name: 'test',
    link: '#'
  },
  {
    name: 'test',
    link: '#'
  },
  {
    name: 'test',
    link: '#'
  },
  {
    name: 'test',
    link: '#'
  },
  {
    name: 'test',
    link: '#'
  }
];
   
const ProductListing: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        <CarouselBanner show={true}>
          {bannerItem.map((item: any, index: any) => (
              <Link key={index} href={item.link || "#"}>
                <Image 
                  src={item.image || require("public/vercel.svg")} 
                  layout="responsive" 
                  width={1440} 
                  height={482} 
                  alt=""
                  />
              </Link>
          ))}
        </CarouselBanner>

        <div className={classNames('container', styles.voucher_section)}>
          <Voucher 
            voucherCode="SALE10" 
            voucherContent="Tặng ngay 1000k cho 200 đơn hàng đầu tiên,đơn hàng đầu."
          />

          <Voucher 
            voucherCode="SALE10" 
            voucherContent="Tặng ngay 1000k cho 200 đơn hàng đầu tiên,đơn hàng đầu."
          />

          <Voucher 
            voucherCode="SALE10" 
            voucherContent="Tặng ngay 1000k cho 200 đơn hàng đầu tiên,đơn hàng đầu."
          />

          <Voucher 
            voucherCode="SALE10" 
            voucherContent="Tặng ngay 1000k cho 200 đơn hàng đầu tiên,đơn hàng đầu."
          />
        </div>
          
        <SectionLayout 
          title="Deal" 
          show={true} 
          showAll={false} 
          containerClassname="container"
        >
          <Carousel responsive={productPanelResponsive} show={true}>
            {listItem.map((item: any, index: any) => (
              <Link href={"/#"} key={index}>
                <ProductPanel product={item} />
              </Link>
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout 
          title="Deal" 
          show={true} 
          showAll={false} 
          containerClassname="container"
        >
          <Carousel responsive={productPanelResponsive} show={true}>
            {listItem.map((item: any, index: any) => (
              <Link href={"#"} key={index}>
                <ProductPanel product={item} />
              </Link>
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout
          title="Test"
          showAll={false}
          containerClassname="container"
          show={true}
        >
          <FilterMenu brandItemArray={brandItem} />
          <div className={styles.list_wrapper}>
            {Array.isArray(listItem) && listItem.map((item:any, index: any) => (
              <ProductPanel className={styles.list_panel} key={index} product={item} />
            ))}
          </div>
        </SectionLayout>

      </div>
      
      <Footer/>
    </div>
  )
}

export default ProductListing;