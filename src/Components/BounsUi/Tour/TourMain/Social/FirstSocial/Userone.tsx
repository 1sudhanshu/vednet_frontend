import { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { H5, Image, P } from "../../../../../../AbstractElements";

const Userone = () => {
  const images = require.context("../../../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Row>
        <Col sm="8">
          <div className="d-flex">
            <Image style={{ width: "75px" }} className=" rounded-circle me-3" src={dynamicImage("user/7.jpg")} alt="Generic placeholder image"/>
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
      Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.
      </P>
      <div className="img-container">
        <div id="aniimated-thumbnials">
          <Image className="img-fluid rounded" src={dynamicImage("other-images/profile-style-img3.png")} alt="gallery" />
        </div>
      </div>
    </Fragment>
  );
};
export default Userone;