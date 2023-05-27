import { Col, Card } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import WelcomeInformation from "../WelcomeCard/WelcomeInformation";
import { WelcomeCarddatas } from "../../../../Data/DashBoard/BusinessDashboard/WelcomeCard";

const WelcomeCard = () => {
  const images = require.context("../../../../assets/images/dashboard", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Col xs="12">
      <Card className=" card-with-border welcome-card o-hidden">
        {WelcomeCarddatas.map((data, index) => (
          <Image
            key={index}
            className={data.imgClass}
            src={dynamicImage(data.imgSrc)}
            alt="12"
          />
        ))}
        <WelcomeInformation />
      </Card>
    </Col>
  );
};

export default WelcomeCard;
