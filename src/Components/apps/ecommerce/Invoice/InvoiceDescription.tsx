import { Image, H4, H6, P } from "../../../../AbstractElements";
import {JohanDeo,JohanDeoMailId,ProductDescription,ProjectDescriptionDetails,} from "../../../../Constant";
import { Col,  Row } from "reactstrap";
import { dynamicImage } from "../../../../Service";

const InvoiceDescription = () => {
  return (
      <Row className="invo-profile">
        <Col xl="4">
          <div className="invo-profile-left">
            <div className="d-flex">
              <div className="d-flex-left">
                <Image className= "media-object rounded-circle img-60" src={dynamicImage("user/1.jpg")}  alt= "user"/>
              </div>
              <div className="flex-grow-1 m-l-20">
                <H4 className= "d-flex-heading f-w-600" >{JohanDeo}</H4>
                <P>{JohanDeoMailId}<br/>
                  <span className="digits">555-555-5555</span>
                </P>
              </div>
            </div>
          </div>
        </Col>
        <Col xl="8">
          <div className="invo-profile-right text-md-end">
            <div id="project">
              <H6>{ProductDescription}</H6>
              <P>{ProjectDescriptionDetails}</P>
            </div>
          </div>
        </Col>
      </Row>
  );
};
export default InvoiceDescription;
