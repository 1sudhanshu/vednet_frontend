import { Card, Col, CardHeader, CardBody, Row } from "reactstrap";
import { H5, P } from "../../../../AbstractElements";
import { MoreVertical } from "react-feather";
import { HobbiesAndInterest } from "../../../../Constant";
import { HobbiesAndInterestsData } from "../../../../Data/apps/SocialApp";

const HobbiesAndInterests = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <H5>
            <span>{HobbiesAndInterest}</span>
            <span className="pull-right"><MoreVertical /></span>
          </H5>
        </CardHeader>
        <CardBody>
          {HobbiesAndInterestsData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}:</span>
                  <P>{data.paragraph1}</P>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HobbiesAndInterests;
