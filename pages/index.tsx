import type { NextPage } from 'next'
import Link from 'next/link'
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
import BlogPanel from '../components/BlogPanel/BlogPanel'

import styles from '../styles/Home.module.scss'
import classNames from 'classnames'


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

const mostSearchCategory = [
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Dưỡng da',
    link: '#'
  },
  {
    title: 'Cọ',
    link: '#'
  }
]

const blogItem = [
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
  },
  {
    image: "/assets/homepage/blog-item/thumbnail-img.png",
    link: "#",
    category: "Trang điểm",
    title: "Cách chăm sóc da",
    description:"Một trong những xu hướng đang được các idol cả nam lẫn nữ lăng xê."
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
          title="Flash deal" 
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

        <div className='container'>
          <Image 
            src="/assets/homepage/banner-ad/pink-ads.png"
            width={480}
            height={265}
            layout='responsive'
            alt=''
          />

          <Image 
            src="/assets/homepage/banner-ad/yellow-ads.png"
            width={480}
            height={265}
            layout='responsive'
            alt=''
          />
        </div>

        <SectionLayout 
          title="Hàng Mới Về" 
          show={true} 
          showAll={false} 
          containerClassname="container"
        >
          <Carousel show={true}>
            {listItem.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout 
          title="Sản Phẩm Bán Chạy" 
          show={true} 
          showAll={false} 
          containerClassname="container"
        >
          <Carousel show={true}>
            {listItem.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout 
          title="Combo Tiết Kiệm" 
          show={true} 
          showAll={false} 
          backgroundImage="assets/homepage/section-layout/background-combo.png"
          rowClassname={classNames("container", styles.combo_section_row)}
        >
          <Carousel show={true}>
            {listItem.map((item: any, index: any) => (
              <ProductPanel key={index} product={item} />
            ))}
          </Carousel>
        </SectionLayout>

        <SectionLayout
          title="Tìm kiếm nhiều nhất"
          show={true}
          containerClassname="container"
          childrenClassName={styles.most_search_section_items}
        >
          {Array.isArray(mostSearchCategory) && mostSearchCategory.map((item: any, index: any) => (
            <div className={styles.btn} key={index}>
              <Link href={item.link}>
                {item.title}
              </Link>
            </div>
          ))}
        </SectionLayout>

        <SectionLayout 
          title="Đề xuất cho bạn" 
          show={true} 
          showAll={false} 
          containerClassname="container"
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

        <SectionLayout
          show={true}
          containerClassname="container"
          title="CheriCT’s Beauty Blogs"
        >
          <Carousel isBlog={true} show={true}>
            {Array.isArray(blogItem) && blogItem.map((item:any, index: any) => (
              <BlogPanel 
                key={index} 
                title={item.title}
                link={item.link}
                category={item.category}
                imgUrl={item.image}
                description={item.description}
              />
            ))}
          </Carousel>
        </SectionLayout>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
