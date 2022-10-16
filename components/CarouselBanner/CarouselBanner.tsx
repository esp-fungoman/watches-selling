import Slider, { Settings } from "react-slick";
import { useRef } from "react";
import classNames from "classnames";

import styles from "./CarouselBanner.module.scss";

interface CarouselBannerProps {
  className?: string,
  children?: any,
  config?: Settings,
  show?: boolean
}

const CarouselBanner = (props: CarouselBannerProps) => {
  const { className, children, config, show } = props;

  const sliderRef = useRef<Slider>(null);
  
  const sliderConfig: Settings = {
    className: styles.slick_slide,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    ...config
  }

  return show ? 
  (
    <div className={classNames(styles.carousel, className)}>
      <Slider ref={sliderRef} {...sliderConfig}>
        {children}
      </Slider>
    </div>
  ) : null 
}

export default CarouselBanner;