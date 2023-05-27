import { Row, Col } from "reactstrap";
import { Image } from "../../../../../../AbstractElements";

const Pictures = () => {
  const images = require.context("../../../../../../assets/images/other-images",true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Row className=" mt-4 pictures" id="aniimated-thumbnials-2">
      <Col sm="6">
        <Image className="img-fluid rounded" src={dynamicImage("profile-style-img.png")} alt="gallery"/>
      </Col>
      <Col sm="6">
        <Image className="img-fluid rounded" src={dynamicImage("profile-style-img.png")} alt="gallery"/>
      </Col>
    </Row>
  );
};

export default Pictures;
