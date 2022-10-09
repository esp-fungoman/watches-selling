import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/CarouselBanner/Carousel'
import Image from 'next/image';
import { useRouter } from 'next/router'
import ProductPanel from '../components/ProductPanel/ProductPanel'

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
          <Carousel>
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
          </Carousel>
        </div>
        <div className="container">
          <div>
            <Carousel productCarousel={true}>
              {listItem.map((item: any, index: any) => (
                <ProductPanel key={index} product={item} />
              ))}
            </Carousel>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
