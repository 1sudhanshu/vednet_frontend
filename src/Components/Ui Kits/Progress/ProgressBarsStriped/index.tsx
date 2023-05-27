import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicProgressBarsStriped from "./DynamicProgressBarsStriped";

const ProgressBarsStriped = () => {
  const span = ` Add <code>.progress-bar-striped</code> to any{" "}
<code>.progress-bar</code> to apply a stripe via CSS gradient over the
progress bar’s background color.`;
  return (
    <Card>
      <HeadingCommon
        Heading="Progress Bars Striped"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-striped bg-primary`}
                role="progressbar"
                style={{ width: `25%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicProgressBarsStriped />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProgressBarsStriped;
