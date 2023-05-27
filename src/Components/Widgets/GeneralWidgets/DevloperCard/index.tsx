import { Col } from "reactstrap";
import Testimonial from "./Testimonial";
import EcommerceWidget from "./EcommerceWidget";

const DevloperCard = () => {
  return (
    <Col xl="4" className="box-col-6">
      <Testimonial />
      <EcommerceWidget />
    </Col>
  );
};

export default DevloperCard;
