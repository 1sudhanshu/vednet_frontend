import { CardBody, Col, Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ActivityLogHeading } from "../../../../Constant";
import MyActivity from "../Common/MyActivity";

const ActivityLog = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ActivityLogHeading} />
        <CardBody>
          <div className="activity-log">
            <MyActivity Heading="Today" />
            <MyActivity Heading="25 December" />
            <MyActivity Heading="8 september" />
            <MyActivity Heading="6 June" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityLog;
