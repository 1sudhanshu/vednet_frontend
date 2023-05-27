import { Col, Row } from "reactstrap";
import { H5, Image, P } from "../../../../../../AbstractElements";

const UserImage = () => {
  const images = require.context("../../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <>
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
      <hr />
      <P>Comfort is very important to me. I think people live better in big houses and in big clothes. Design and style should work toward making you look good and feel good without a lot of effort so you can get on with the things that matter. My shows are about the complete woman who swallows it all. Its a question of survival. Those fashion designers are just crazy; but arent we all? You can only go forward by making mistakes. Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable.
      </P>
    </>
  );
};

export default UserImage;
