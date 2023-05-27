import { Card } from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import BadgesExampleCardBody from "./BadgesExampleCardBody";

const BadgesExample = () => {
  return (
    <Card className="height-equal">
      <HeadingCommon Heading="Badges Example" />
      <BadgesExampleCardBody />
    </Card>
  );
};

export default BadgesExample;
