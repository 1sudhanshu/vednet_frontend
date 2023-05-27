import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SlickSlider from "./SlickSlider";
const OwlCarouselContainer = () => {
  return (
    <Fragment>
      <Container fluid={true} className="carousal-page">
        <Row>
          <Col sm="12">
            <SlickSlider slides={5} title="Basic Example" rtl={false} />

            <SlickSlider slides={3} title="Responsive Example" rtl={false} />

            <SlickSlider slides={3} title="Center Example" rtl={false} />

            <SlickSlider slides={3} title="Right to Left Example" rtl={true} />

            <SlickSlider slides={3} title="Lazy load Example" rtl={false} />

            <SlickSlider slides={3} title="Auto Play Example" rtl={false} autoplay={true}/>

            <SlickSlider slides={3} title="FocusOnSelect" rtl={false} focusOnSelect={true}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default OwlCarouselContainer;
