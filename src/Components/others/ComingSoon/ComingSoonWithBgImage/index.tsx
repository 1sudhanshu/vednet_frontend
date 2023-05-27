import { H5 } from "../../../../AbstractElements";
import { WeAreComingSoon } from "../../../../Constant";
import CountdownData from "../common/CountdownData";
import { Container } from "reactstrap";

const ComingSoonWithBgImageContainer = () => {
  const images = require.context(
    "../../../../assets/images/other-images",
    true
  );
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Container fluid={true} className="p-0 m-0">
      <div className="comingsoon comingsoon-bgimg">
        <div className="comingsoon-inner text-center">
          <img src={dynamicImage("coming-soon-Logo.png")} alt="comingsoon" />
          <H5>{WeAreComingSoon}</H5>
          <div className="countdown" id="clockdiv">
            <CountdownData />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComingSoonWithBgImageContainer;
