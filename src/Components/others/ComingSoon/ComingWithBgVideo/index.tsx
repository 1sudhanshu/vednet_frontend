import { H5, Image } from "../../../../AbstractElements";
import { WeAreComingSoon } from "../../../../Constant";
import CountdownData from "../common/CountdownData";
import { Container } from "reactstrap";

const ComingWithBgVideoContainer = () => {
  const images = require.context(
    "../../../../assets/images/other-images",
    true
  );
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Container fluid={true} className="p-0">
      <div className="comingsoon auth-bg-video">
        <video
          className="bgvideo-comingsoon"
          id="bgvid"
          poster={dynamicImage("coming-soon-bg.jpg")}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={require("../../../../assets/video/auth-bg.mp4")} type="video/mp4" />
        </video>
        <div className="comingsoon-inner text-center">
          <Image src={dynamicImage("coming-soon-Logo.png")} alt="comingSoon" />
          <H5>{WeAreComingSoon}</H5>
          <div className="countdown" id="clockdiv">
            <CountdownData />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ComingWithBgVideoContainer;
