import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'
import CarouselBanner from '../components/CarouselBanner/CarouselBanner'
import Image from 'next/image';
import { useRouter } from 'next/router'
import ProductPanel from '../components/ProductPanel/ProductPanel'
import SectionLayout from '../components/SectionLayout/SectionLayout'
import BrandPanel from '../components/BrandPanel/BrandPanel'

import styles from '../styles/Home.module.css'


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
]

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
]

const brandItem = [
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#"
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#"
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#"
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#"
  },
  {
    thumbnail: "/assets/homepage/brand-item/thumbnail.png",
    logo: "/assets/homepage/brand-item/logo.svg",
    link: "#"
  }
]

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>CheriCT</title>
      </Head>
      
      <div>
        <Header/>
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
          title="Hàng Mới Về" 
          show={true} 
          showAll={false} 
          containerClassname="container"
          backgroundImage="/assets/homepage/section-layout/background-image.png"
        >
          <Carousel show={true}>
            {listItem.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout
          show={true}
          title="Thương hiệu nổi bật"
          showAll={true}
          containerClassname="container"
          childrenClassName={styles.brand_section}
        >
          {Array.isArray(brandItem) && brandItem.map((item:any, index: any) => (
            <BrandPanel 
              key={index} 
              imgUrl={item.thumbnail}
              logoUrl={item.logo}
              link={item.link}
            />
          ))}
        </SectionLayout>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
