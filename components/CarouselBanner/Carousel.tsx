import Slider, { Settings } from "react-slick";
import styles from "./Carousel.module.scss";
import classNames from "classnames";
import Icon from "../Icon/Icon";

interface ICarousel {
  className?: string,
  children?: any,
  config?: Settings,
  productCarousel?: boolean
}

function NextArrowBtn(props: any) { 
  return (
    <div className={props.className} style={{...props.style, transform: 'rotate(90deg)'}} onClick={props.onClick}>
      <Icon icon="thin-black-dropdown" size={32}/>
    </div>
  )
};

function PrevArrowBtn(props: any) { 
  return (
    <div className={props.className} style={{...props.style, transform: 'rotate(-90deg)'}} onClick={props.onClick}>
      <Icon icon="thin-black-dropdown" size={32}/>
    </div>
  )
};

const Carousel = (props: ICarousel) => {
  const { className, children, config, productCarousel } = props;

  const sliderConfig = productCarousel ? 
  {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow: <NextArrowBtn />,
    nextArrow: <PrevArrowBtn />,
    ...config
  } : { 
    className: styles.slick_slide,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    ...config
  }

  return (
    <div className={classNames(styles.carousel, className)}>
      <Slider {...sliderConfig}>
        {children}
      </Slider>
    </div>
  )
}

export default Carousel;