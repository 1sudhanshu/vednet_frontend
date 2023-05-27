import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DynamincSteps from "./DynamincSteps";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { P } from "../../../../AbstractElements";

const BasicClass = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <HeadingCommon Heading="Default Step" />
          <CardBody>
            <Row className="u-steps">
              <Col sm="4" className="u-step ">
                <span className="u-step-number">1</span>
                <div className="u-step-desc">
                  <span className="u-step-title">Shopping</span>
                  <P>Choose what you want</P>
                </div>
              </Col>
              <DynamincSteps/>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BasicClass;
