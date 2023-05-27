import { Col, Card, CardHeader } from "reactstrap";
import { H3, H5, Image, P } from "../../../AbstractElements";
import { DollarSign } from "react-feather";
import { Earrning,TodaysSale,WelcomeText,Yoursales} from "../../../Constant";

const WelcomeCard = () => {
  const images = require.context("../../../assets/images/dashboard", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Col xs="12">
      <Card className=" card-with-border welcome-card o-hidden">
        <Image className="main"    src={dynamicImage("welcome.png")} alt="main" />
        <Image className="decore1" src={dynamicImage("d1.png")} alt="d1" />
        <Image className="decore3" src={dynamicImage("d1.png")} alt="d3" />
        <Image className="decore4" src={dynamicImage("d1.png")}  alt="d4" />
        <Image className="decore2" src={dynamicImage("d2.png")} alt="d2" />
        <CardHeader className="card-no-border o-hidden total-sale-widget">
          <div className="d-flex">
            <div className="flex-grow-1">
              <H5 className="f-w-600">Hello Johan Deo !</H5>
              <P> {WelcomeText}</P>
            </div>
          </div>
          <div className="d-flex mt-5">
            <div className="flex-grow-1">
              <H3>Wednesday, 20</H3>
              <P className="mb-0">
                {TodaysSale}
                <span className="font-success"> 3.56%<i className="fa fa-caret-up" /></span>
              </P>
              <div className="sales-widgets d-flex mt-1">
                <H3 className="mt-1 mb-0 f-w-600">
                  <DollarSign className="me-1 txt-primary" />
                  <span className="counter txt-primary">405</span>
                  <span className="ms-2 f-12 f-w-400">{Earrning}</span>
                </H3>
              </div>
              <P className="mb-0">
                {Yoursales} &amp; earning over the last 24 hours
              </P>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default WelcomeCard;