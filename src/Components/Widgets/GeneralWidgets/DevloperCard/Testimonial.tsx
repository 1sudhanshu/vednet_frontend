import Slider from "react-slick";
import { Card, CardBody } from "reactstrap";
import CarouselCard from "../../common/CarouselCard";

const Testimonial = () => {
  return (
    <Card className="testimonial text-center widgets-testimonial custom-scrollbar">
      <CardBody>
        <div className="owl-carousel owl-theme" id="owl-carousel-testimonial">
          <Slider>
            <CarouselCard heading={1} />
            <CarouselCard heading={2} />
          </Slider>
        </div>
      </CardBody>
    </Card>
  );
};

export default Testimonial;
