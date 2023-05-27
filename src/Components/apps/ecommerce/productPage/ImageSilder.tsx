import {  useState } from "react";
import { Image } from "../../../../AbstractElements";
import { Fragment } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { EcommerceRootState } from "../ReducerTypes";
import { dynamicImage } from "../../../../Service";

const ImageSlider = () => {
  const { productItem } = useSelector(
    (state: EcommerceRootState) => state.ProductReducer
  );

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <Fragment>
      <Slider
        arrows={false}
        asNavFor={nav2}
        ref={(slider1: any) => setNav1(slider1)}
      >
        {productItem
          ? productItem.map((item) =>
              item.variants.map((items, id) => (
                <Image
                  src={`${dynamicImage(items.images)}`}
                  alt={""}
                  className={"img-fluid"}
                  key={id}
                />
              ))
            )
          : 
            "No product Found "
        }
      </Slider>
      <Slider
        arrows={false}
        asNavFor={nav1}
        ref={(slider2: any) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {productItem &&
          productItem.map((item) => {
            return item.variants.map((items, id) => (
              <Image
                src={`${dynamicImage(items.images)}`}
                alt={"img"}
                className="img-fluid"
                key={id}
              />
            ));
          })}
      </Slider>
    </Fragment>
  );
};
export default ImageSlider;