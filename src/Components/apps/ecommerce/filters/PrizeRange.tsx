import { NewProducts } from "../../../../Constant";
import { H6 } from "../../../../AbstractElements";
import Slider from "react-slick";
import SliderImagesBox from "./SliderImagesBox";

const PrizeRange = () => {
  var settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
  };

  return (
    <div>
      <hr />
      <div className="product-filter pb-0">
        <H6 className="f-w-600">{NewProducts}</H6>
        <div className="owl-carousel owl-theme" id="testimonial">
          <div>
            <Slider {...settings}>
              <SliderImagesBox />
              <SliderImagesBox />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeRange;
