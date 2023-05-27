import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { P } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamincSteps from "./DynamincSteps";

const StepsStatesClass = () => {
  const span = `
A u-step with classname <code>.done</code> A u-step with classname{" "}
<code>.error</code>A u-step with classname <code>.current</code>A
u-step with classname <code>.disabled</code>
`;

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <HeadingCommon
            Heading="Steps States"
            dangerouslySetInnerHTML={span}
          />
          <CardBody>
            <Row className="row-lg">
              <Col xl="3" lg="6">
                <div className="u-step done bg-primary">
                  <span className="u-step-number txt-primary">1</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <P>Waiting for the goods</P>
                  </div>
                </div>
              </Col>
              <DynamincSteps />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StepsStatesClass;
    