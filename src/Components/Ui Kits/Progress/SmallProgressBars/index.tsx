import { Card, CardBody, Row, Col } from "reactstrap";
import { ProgressBars } from "../../../../Data/Components/UiKits/progress";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicSmallProgressBars from "./DynamicSmallProgressBars";

const SmallProgressBars = () => {
  const span = `Use <code> .sm-progress-bar</code>class to change progress size to small:`;
  return (
    <Card>
      <HeadingCommon
        Heading="Small Progress Bars"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress sm-progress-bar">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `25%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicSmallProgressBars />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default SmallProgressBars;
