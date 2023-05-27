import { Col, Card, CardBody } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import NewUserSocial from "./NewUserSocial";
import TimelineContent from "./TimelineContent";

const Elana = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Col xl="4" className="xl-50 box-col-6">
      <Card className="card-with-border">
        <CardBody>
          <NewUserSocial />
          <Image
            className="img-fluid comment-img"
            alt=""
            src={dynamicImage("social-app/social-image.png")}
          />
          <TimelineContent />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Elana;
