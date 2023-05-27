import { Card, CardHeader, Col, CardBody, Row } from "reactstrap";
import { MoreVertical } from "react-feather";
import { H5, P } from "../../../../AbstractElements";
import { EducationAndEmployementHeading } from "../../../../Constant";
import { EducationAndEmployementData } from "../../../../Data/apps/SocialApp";

const EducationAndEmployement = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className="social-header">
          <H5><span>{EducationAndEmployementHeading}</span>
            <span className="pull-right"><MoreVertical /></span>
          </H5>
        </CardHeader>
        <CardBody>
          {EducationAndEmployementData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm="6">
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}</span>
                  <P>{data.date1}</P>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
              <Col sm="6">
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <P>{data.date2}</P>
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

export default EducationAndEmployement;
