import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicProgressBarsAnimated from "./DynamicProgressBarsAnimated";

const ProgressBarsAnimated = () => {
  const span = `  The striped gradient can also be animated. Add
  <code>.progress-bar-animated</code> to <code>.progress-bar </code> to
  animate the stripes right to left via CSS3 animations.`;
  return (
    <Card>
      <HeadingCommon
        Heading="Progress Bars Animated"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress">
              <div
                className={`progress-bar-animated progress-bar-striped bg-secondary`}
                role="progressbar"
                style={{ width: `50%` }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicProgressBarsAnimated />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProgressBarsAnimated;
