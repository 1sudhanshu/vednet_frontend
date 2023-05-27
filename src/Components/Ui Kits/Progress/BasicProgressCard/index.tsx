import { Card, CardBody, Row, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicBasicProgressCard from "./DynamicBasicProgressCard";

const BasicProgressCard = () => {
  const span = `Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.`;
  return (
    <Card>
      <HeadingCommon Heading="Badges as part buttons" dangerouslySetInnerHTML={span}/>
      <CardBody>
        <Row className="progress-showcase">
          <Col>
            <div className="progress">
              <div
                role="progressbar"
                style={{ width: `0%` }}
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <DynamicBasicProgressCard />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BasicProgressCard;
