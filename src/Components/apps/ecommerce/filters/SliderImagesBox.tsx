import { Col, Row } from "reactstrap";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { FancyShirt, FancyShirtPrice, Star } from "../../../../Constant";

const SliderImagesBox = () => {
  let data = ["01","02","03"];
  return (
    <div className="item">
      {data.map((data,index) => (
        <Row className="product-box" key={index}>
          <Col md="6" className="product-img">
            <Image
              className="img-fluid"
              src={dynamicImage(`ecommerce/${data}.jpg`)}
              alt="ecommerce-1"
            />
          </Col>
          <Col md="6" className="product-details text-start">
            {Star}
            <P className="mb-0">{FancyShirt}</P>
            <div className="product-price">{FancyShirtPrice}</div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default SliderImagesBox;
