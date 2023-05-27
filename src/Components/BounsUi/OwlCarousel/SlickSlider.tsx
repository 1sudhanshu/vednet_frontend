import { CardBody, Card } from "reactstrap";
import Image from "../../../CommonElements/Media";
import Slider from "react-slick";
import { CarouselsData } from "../../../Data/Components/BonusUI/Carousel";
import HeadingCommon from "../../../Common/HeadingCommon";
import { reponsiveData } from "../../../Data/Components/BonusUI/OwlCarousel/SlickSlider";
interface propsTypes {
  slides: number;
  rtl: boolean;
  title: string;
  lazyLoad?: "ondemand" | "progressive" | "anticipated";
  autoplay?: boolean;
  focusOnSelect?: boolean;
}

export const SlickSlider = (props: propsTypes) => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: props?.autoplay,
    speed: 100,
    arrows: false,
    slidesToShow: props.slides,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: "10px",
    centerMode: false,
    rtl: props.rtl,
    focusOnSelect: props.focusOnSelect,
    lazyLoad: props?.lazyLoad,
    responsive:reponsiveData
  };
  return (
    <Card>
      <HeadingCommon Heading={props.title} />
      <CardBody>
        <Slider {...settings}>
          {CarouselsData.map((item) => (
            <div className="item" key={item.id}>
              <Image
                src={item.img}
                alt={`Carousels${item.id}`}
                className="img-fluid"
              />
            </div>
          ))}
        </Slider>
      </CardBody>
    </Card>
  );
};
export default SlickSlider;