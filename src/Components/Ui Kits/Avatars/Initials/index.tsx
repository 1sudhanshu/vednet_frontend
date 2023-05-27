import { Card, CardBody } from "reactstrap";
import StaticImage from "./StaticImage";
import DynamicImage from "./DynamicImage";
import HeadingCommon from "../../../../Common/HeadingCommon";

const Initials = () => {
  return (
    <Card>
      <HeadingCommon Heading="Initials" />
      <CardBody className="avatar-showcase">
        <div className="avatars">
          <StaticImage />
          <DynamicImage />
        </div>
      </CardBody>
    </Card>
  );
};

export default Initials;
