import Slider from "react-slick";
import styles from "./Carousel.module.scss";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  className?: string,
  children?: any,
  responsive?: {[key: string]: number},
  show?: boolean,
  isBlog?: boolean
}

const Carousel = (props: CarouselProps) => {
  const { className, children, responsive, show, isBlog } = props;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    screen.width > 500 && setIsDesktop(true);
  }, []);

  const sliderRef = useRef<any>(null);

  const handlePrevButton = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }

  const handleNextButton = () => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }

  const iniSliderConfig =
  {
    className: styles.slick_slide,
    dots: true,
    dotsClass: styles.slick_dots,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    // responsive: [
    //   //2xl
    //   {
    //     breakpoint: 1920,
    //     settings: {
    //       slidesToShow: responsive?.xxlShow,
    //       slidesToScroll: responsive?.xxlScroll,
    //     },
    //   },
    //   //xl
    //   {
    //     breakpoint: 1450,
    //     settings: {
    //       slidesToShow: responsive?.xlShow,
    //       slidesToScroll: responsive?.xlScroll,
    //     },
    //   },
    //   //lg
    //   {
    //     breakpoint: 1300,
    //     settings: {
    //       slidesToShow: responsive?.lgShow,
    //       slidesToScroll: responsive?.lgScroll,
    //     },
    //   },
    //   //md
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: responsive?.mdShow,
    //       slidesToScroll: responsive?.mdScroll,
    //     },
    //   },
    //   //sm
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: responsive?.smShow,
    //       slidesToScroll: responsive?.smScroll,
    //     },
    //   },
    //   //xs
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: responsive?.xsShow,
    //       slidesToScroll: responsive?.xsScroll,
    //     },
    //   },
    // ]
  };

  const sliderConfig = isBlog ? {
    ...iniSliderConfig,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false
  } : iniSliderConfig;

  const carouselClass = classNames(
    className,
    styles.carousel
  );

  const MobileSlider: any = (props: any) => (
    <div {...props} className={styles.mobile_slider}>
      {props.children}
    </div>
  );

  const SliderComponent: any = () =>
  isDesktop ? (
    <Slider ref={sliderRef} {...sliderConfig}>
      {children}
    </Slider>
  ) : (
    <MobileSlider>{children}</MobileSlider>
  );

  return show ? (
    <div className={carouselClass}>
      <div className={styles.btn_next} onClick={handleNextButton}>
        <Icon icon="thin-black-dropdown" size={32}/>
      </div>
      <SliderComponent />
      <div className={styles.btn_prev} onClick={handlePrevButton}>
        <Icon icon="thin-black-dropdown" size={32}/>
      </div>
    </div>
  ): null;
}

export default Carousel;