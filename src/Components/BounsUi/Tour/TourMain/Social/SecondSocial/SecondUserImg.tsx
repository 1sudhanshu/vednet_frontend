import { Row, Col } from "reactstrap";
import { H5, Image, P } from "../../../../../../AbstractElements";

const SecondUserImg = () => {
  const images = require.context("../../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <>
      <Row>
        <Col sm="8">
          <div className="d-flex">
            <Image style={{ width: "75px" }} className=" rounded-circle me-3" src={dynamicImage("7.jpg")} alt="Generic placeholder image"/>
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
      <hr />
      <P>
      Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.
      </P>
    </>
  );
};

export default SecondUserImg;
