import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import SlideToggle from "react-slide-toggle";

import styles from "../../styles/ProductCategory.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/Icon/Icon";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import ProductPanel from "../../components/ProductPanel/ProductPanel";

const categoryFilter = [
  {
    id: 1,
    name: "Loại sản phẩm",
    subCategory: [
      {
        name: "Trang điểm",
        link: "#"
      },
      {
        name: "Dưỡng da mặt",
        link: "#"
      },
      {
        name: "Làm sạch",
        link: "#"
      },
      {
        name: "Chăm sóc cơ thể",
        link: "#"
      },
      {
        name: "Chăm sóc tóc",
        link: "#"
      },
    ]
  },
  {
    id: 2,
    name: "Các vấn đề về da",
    subCategory: [
      {
        name: "Trang điểm",
        link: "#"
      },
      {
        name: "Dưỡng da mặt",
        link: "#"
      },
      {
        name: "Làm sạch",
        link: "#"
      },
      {
        name: "Chăm sóc cơ thể",
        link: "#"
      },
      {
        name: "Chăm sóc tóc",
        link: "#"
      },
    ]
  },
  {
    id: 3,
    name: "Loại sản phẩm",
    subCategory: [
      {
        name: "Trang điểm",
        link: "#"
      },
      {
        name: "Dưỡng da mặt",
        link: "#"
      },
      {
        name: "Làm sạch",
        link: "#"
      },
      {
        name: "Chăm sóc cơ thể",
        link: "#"
      },
      {
        name: "Chăm sóc tóc",
        link: "#"
      },
    ]
  }
]

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

const ProductCategory: NextPage = () => {
  const router = useRouter();

  const DropDown = (props: any) => {
    const { title, subCategory, className, titleClassName } = props;
    const [show, setShow] = useState(false);

    const [toggleEvent, setToggleEvent] = useState(0);
    const arrowStyle = {
      transform: show ? 'rotate(0deg) translateY(-3px)' : 'rotate(-90deg) translateX(3px)',
      transition: "0.5s"
    }

    const onToggle = () => {
      setToggleEvent(Date.now());
      setShow(prev => !prev);
    };

    return (
      <div className={className}>
        <div 
          style={{display: "flex", alignItems: "center", gap: "10px"}} 
          onClick={onToggle}>
          <div style={arrowStyle}>
            <Icon icon="thin-black-dropdown" size={18} />
          </div>
          <p className={titleClassName}>{title}</p>
        </div>

        <SlideToggle 
          collapsed 
          duration={500}
          toggleEvent={toggleEvent}
        >
          {({setCollapsibleElement} : any ) => (
            <ul ref={setCollapsibleElement}>
              {Array.isArray(subCategory) && subCategory.map((listItem: any, listIndex: any) => (
              <li key={listIndex} onClick={() => router.push('#' || listItem.link)}>
                {listItem.name}
              </li>
            ))}
            </ul>
          )}
        </SlideToggle>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <div className={classNames("container", styles.page_container)}>
        <div className={styles.category_section}>
          <h4 className={styles.title}>Danh mục</h4>
          {Array.isArray(categoryFilter) && categoryFilter.map((item: any) => (
            <DropDown 
              key={item.id} 
              title={item.name} 
              className={styles.dropdown}
              titleClassName={styles.dropdown_title}
              subCategory={item.subCategory}
            />
          ))}
        </div>

        <div className={styles.category_section_mobile}>

        </div>

        <SectionLayout
          title="Beauty Box"
          show={true}
          className={styles.list_section}
          titleClassname={styles.title}
          containerClassname={styles.list_section_container}
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

export default ProductCategory;