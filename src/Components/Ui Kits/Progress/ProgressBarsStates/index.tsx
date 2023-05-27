import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import CustomProgressBarsStates from "./CustomProgressBarsStates";

const ProgressBarsStates = () => {
  const span = `Use state utility classes to change the appearance of individual
  progress bars.`;
  return (
    <Card>
      <HeadingCommon
        Heading="Progress Bars States"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress">
              <div
                className={`progress-bar bg-primary`}
                role="progressbar"
                style={{ width: `25%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <CustomProgressBarsStates />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProgressBarsStates;
