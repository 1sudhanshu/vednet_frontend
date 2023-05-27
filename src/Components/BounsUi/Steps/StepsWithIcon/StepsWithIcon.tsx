import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicSteps from "./DynamicSteps";


const StepsWithIcon = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <HeadingCommon Heading="Steps with icon" />
          <CardBody>
            <Row className="u-steps">
              <Col md="4" className="u-step">
                <span
                  className="u-step-icon icon-shopping-cart-full"
                  aria-hidden="true"
                ></span>
                <div className="u-step-desc">
                  <span className="u-step-title">Shopping</span>
                </div>
              </Col>
              <DynamicSteps />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StepsWithIcon;
