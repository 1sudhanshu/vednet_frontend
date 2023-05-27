import { Card, CardBody } from "reactstrap";
import DynamicImage from "./DynamicImage";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticImage from "./StaticImage";

const Shape = () => {
  return (
    <Card>
      <HeadingCommon Heading="Shape" />
      <CardBody className="avatar-showcase">
        <div className="avatars">
          <StaticImage />
          <DynamicImage />
        </div>
      </CardBody>
    </Card>
  );
};

export default Shape;
