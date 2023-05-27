import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicCustomHeightProgressBars from "./DynamicCustomHeightProgressBars";

const CustomHeightProgressBars = () => {
  const span = ` Set a height value on the <code>.progress-bar</code>, so if you change
  that value the outer <code>.progress </code> will automatically resize
  accordingly.`;
  return (
    <Card>
      <HeadingCommon
        Heading="Custom Height Progress Bars"
        dangerouslySetInnerHTML={span}
      />
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className={`progress`} style={{ height: `1px` }}>
              <div
                className={`progress-bar bg-primary`}
                role="progressbar"
                style={{ width: `25%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicCustomHeightProgressBars />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CustomHeightProgressBars;
