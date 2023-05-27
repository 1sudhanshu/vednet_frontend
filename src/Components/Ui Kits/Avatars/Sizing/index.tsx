import { Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticImage from "./StaticImage";
import DynamicImage from "./DynamicImage";

const Sizing = () => {
  return (
    <Card>
      <HeadingCommon Heading="Sizing" />
      <CardBody className=" avatar-showcase">
        <div className="avatars">
          <DynamicImage />
        </div>
      </CardBody>
    </Card>
  );
};
export default Sizing;
