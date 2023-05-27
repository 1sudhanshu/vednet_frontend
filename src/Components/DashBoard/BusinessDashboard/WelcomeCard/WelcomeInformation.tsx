import { H5, P } from "../../../../AbstractElements";
import { WelcomeText } from "../../../../Constant";
import WelcomeInformationBody from "./WelcomeInformationBody";
import { CardHeader } from "reactstrap";
const WelcomeInformation = () => {
  return (
    <CardHeader className=" card-no-border o-hidden total-sale-widget">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H5 className="f-w-600">Hello Johan Deo !</H5>
          <P> {WelcomeText}</P>
        </div>
      </div>
      <WelcomeInformationBody />
    </CardHeader>
  );
};

export default WelcomeInformation;
