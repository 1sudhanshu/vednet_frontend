import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicLargeProgressBars from "./DynamicLargeProgressBars";

const LargeProgressBars = () => {
  const span = ` Use <code> .lg-progress-bar</code>class to change progress size to small:`;
  return (
    <Card>
      <HeadingCommon
        Heading="Large Progress Bars"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress lg-progress-bar">
              <div
                className={`progress-bar bg-secondary`}
                role="progressbar"
                style={{ width: `50%` }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicLargeProgressBars />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default LargeProgressBars;
