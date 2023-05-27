import { Row, Col } from "reactstrap";
import UserLikeComment from "./UserLikeComment";
import { Image, P } from "../../../../../../AbstractElements";

const AniimatedThumbnials = () => {
  const images = require.context("../../../../../../assets/images/blog", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Row>
      <Col lg="12" xl="4">
        <div id="aniimated-thumbnials-3">
          <a href="#javascript">
            <Image className="img-fluid rounded" src={dynamicImage("img.png")} alt="gallery"/>
          </a>
        </div>
        <UserLikeComment />
      </Col>
      <Col xl="8">
        <P>
        Success isn't about the end result, it's about what you learn along the way. Confidence. If you have it, you can make anything look good. Grunge is a hippied romantic version of punk. I'm an accomplice to helping women get what they want. Clothes can transform your mood and confidence. I think it's an old fashioned notion that fashion needs to be exclusive to be fashionable. Dressing is a way of life. My customers are successful working women. I want people to be afraid of the women I dress. Age is something only in your head or a stereotype. Age means nothing when you are passionate about something. There has to be a balance between your mental satisfaction and the financial needs of your company.
        </P>
      </Col>
    </Row>
  );
};

export default AniimatedThumbnials;