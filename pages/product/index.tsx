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
import { useCallback, useEffect, useState } from "react";
import { WatchApi } from "../../services/watch";
import { Pagination, Select } from "antd";
import { isArray } from "lodash";
import router, { useRouter } from "next/router";
import { stringifyParams } from "../../helpers/router.helper";
import { WatchTypeApi } from "../../services/watch-type";
import { WatchBrandApi } from "../../services/watch-brand";

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

const ProductListing: NextPage = () => {
  const router = useRouter();
  console.log("router", router);

  const [watchList, setWatchList] = useState<any[]>([]);
  const [typeList, setTypeList] = useState<any[]>([
    { label: "metal", value: "metal" },
    { label: "canvas", value: "canvas" },
  ]);
  const [brandList, setBrandList] = useState<any[]>([
    { label: "casio", value: "casio" },
    { label: "curnon", value: "curnon" },
  ]);
  const [selectedType, setSelectedType] = useState<any>();
  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [priceList, setPriceList] = useState([
    { label: "Ascending", value: "asc" },
    { label: "Descending", value: "desc" },
  ]);
  const [selectedPrice, setSelectedPrice] = useState<any>();

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
        type_id: selectedType || undefined,
        brand_id: selectedBrand || undefined,
        sort_by: selectedPrice || undefined,
        name: router?.query?.search,
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
    getWatchList();
    WatchTypeApi.list().then((res) => {
      if (res) {
        setTypeList(res);
      }
    });
    WatchBrandApi.list().then((res) => {
      if (res) {
        setBrandList(res);
      }
    });
  }, [pagination.page, selectedBrand, selectedPrice, selectedType, router]);
  const handlePageChange = (page: number) => {
    setPagination((prevState: any) => ({ ...prevState, page }));
  };
  return (
    <div>
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

        <div className="w-full container flex justify-start gap-8 mt-8">
          {isArray(typeList) && (
            <div className="w-[280px] flex items-center gap-3">
              Type:
              <Select
                allowClear
                className="w-full"
                options={typeList.map((type) => ({
                  label: type.name,
                  value: type.id,
                }))}
                placeholder="Select type"
                onChange={(option: any) => {
                  console.log("otp", option);
                  option && setSelectedType(option);
                }}
                onClear={() => {
                  setSelectedType(null);
                }}
                value={selectedType}
              />
            </div>
          )}
          {isArray(brandList) && (
            <div className="w-[280px] flex items-center gap-3">
              Brand:
              <Select
                allowClear
                className="w-full"
                options={brandList.map((brand) => ({
                  label: brand.name,
                  value: brand.id,
                }))}
                placeholder="Select brand"
                onChange={(option: any) => {
                  option && setSelectedBrand(option);
                }}
                onClear={() => {
                  setSelectedBrand(null);
                }}
                value={selectedBrand}
              />
            </div>
          )}

          <div className="w-[280px] flex items-center justify-between gap-3">
            Price:{" "}
            <Select
              allowClear
              className="w-full"
              options={priceList}
              placeholder="Sort by"
              onChange={(option: any) => {
                option && setSelectedPrice(option);
              }}
              onClear={() => {
                setSelectedPrice(null);
              }}
              value={selectedPrice}
            />
          </div>
        </div>

        <SectionLayout
          title="Deal"
          show={true}
          showAll={false}
          containerClassname="container"
        >
          {/* <Carousel responsive={productPanelResponsive} show={true}> */}
          <div className="flex flex-wrap gap-[12px] justify-between">
            {watchList.length > 0 &&
              watchList?.map((item: any) => (
                <Link
                  href={`${process.env.NEXT_PUBLIC_URL}/product/${item.id}`}
                  key={item.id}
                  className="flex-1"
                >
                  <ProductPanel product={item} className="w-[215px]" />
                </Link>
              ))}
          </div>
          {/* </Carousel> */}
        </SectionLayout>
        <div className="flex justify-center mb-4">
          <Pagination
            current={pagination.page}
            total={pagination.total}
            pageSize={pagination.pageSize}
            onChange={handlePageChange}
          />
        </div>
        {/* <SectionLayout
          title="Test"
          showAll={false}
          containerClassname="container"
          show={true}
        >

          <div className="flex justify-center">
            <Pagination
              current={pagination.page}
              total={pagination.total}
              pageSize={pagination.pageSize}
              onChange={handlePageChange}
            />
          </div>
        </SectionLayout> */}
      </div>
    </div>
  );
};

export default ProductListing;
