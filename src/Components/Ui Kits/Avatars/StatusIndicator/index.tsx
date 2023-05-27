import { Card, CardBody } from "reactstrap";
import StaticImage from "./StaticImage";
import DynamicImage from "./DynamicImage";
import HeadingCommon from "../../../../Common/HeadingCommon";
const StatusIndicator = () => {
  return (
    <Card>
      <HeadingCommon Heading="Status Indicator" />
      <CardBody className="avatar-showcase">
        <div className="avatars">
          <StaticImage />
          <DynamicImage />
        </div>
      </CardBody>
    </Card>
  );
};

export default StatusIndicator;
