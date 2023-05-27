import { H5, Image } from "../../../../AbstractElements";
import { WeAreComingSoon } from "../../../../Constant";
import CountdownData from "../common/CountdownData";
import { Container } from "reactstrap";

const ComingSoonSimpleContainer = () => {
  const images = require.context("../../../../assets/images/other-images",true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid={true} className="p-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Image src={dynamicImage("coming-soon-Logo.png")} alt="coming soon" />
            <H5>{WeAreComingSoon}</H5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoonSimpleContainer;
