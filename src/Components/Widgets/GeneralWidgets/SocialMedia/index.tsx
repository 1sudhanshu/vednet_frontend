import { Card, Col, CardBody, Row } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { Fragment } from "react";
import { SocialMeadiaDatas } from "../../../../Data/widgets/SocialMedia";

const SocialMeadia = () => {
  return (
    <Fragment>
      {SocialMeadiaDatas.map((data, index) => (
        <Col key={index} sm="6" xl="3" lg="6" className="xl-50 box-col-6">
          <Card className=" social-widget-card">
            <CardBody>
              <div className="redial-social-widget radial-bar-70">
                {data.icon}
              </div>
              <H5 className="b-b-light pb-4 pt-3 text-center">{data.tittle}</H5>
              <Row>
                {data.childrenRow &&
                  data.childrenRow.map((data, index2) => (
                    <Col key={index2} className={data.colClass}>
                      <span>{data.span}</span>
                      <h4 className="counter mb-0">{data.number}</h4>
                    </Col>
                  ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default SocialMeadia;
