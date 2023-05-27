import { Col, Row } from "reactstrap";
import { H5, Image } from "../../../../../../AbstractElements";

const Userimage = () => {
  const images = require.context("../../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Row>
      <Col sm="8">
        <div className="d-flex">
          <Image
            style={{ width: "75px" }}
            className="img-thumbnail rounded-circle me-3"
            src={dynamicImage("7.jpg")}
            alt="Generic placeholder image"
          />
          <div className="flex-grow-1 align-self-center">
            <H5 className="mt-0 user-name">JOHAN DIO</H5>
          </div>
        </div>
      </Col>
      <Col sm="4" className=" align-self-center">
        <div className="float-sm-end">
          <small>10 Hours ago</small>
        </div>
      </Col>
    </Row>
  );
};

export default Userimage;
