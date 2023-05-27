import { Card, CardHeader, Col } from "reactstrap";
import { H5, Image, P } from "../../../../../AbstractElements";
import { WelcomeSocial, paragraph } from "../../../../../Constant";
import ElanaSaintBody from "./ElanaSaintBody";

const ElanaSaint = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Col xl="8" className="xl-60 box-col-7">
      <div>
        <H5 className="social-title">{WelcomeSocial}</H5>
        <P>{paragraph}</P>
      </div>
      <Card className=" card-with-border resolve-complain insta-profile">
        <CardHeader className=" card-no-border">
          <div className="d-flex">
            <Image
              className="img-90 align-top m-r-15 rounded-circle"
              src={dynamicImage("2.png")}
              alt="ElanaSaint"
            />
            <ElanaSaintBody />
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default ElanaSaint;
