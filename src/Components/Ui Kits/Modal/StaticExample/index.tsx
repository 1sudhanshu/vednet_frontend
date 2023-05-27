import { Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticExampleCardBody from "./StaticExampleCardBody";

const StaticExample = () => {
  return (
    <Card>
      <HeadingCommon Heading="Static Example" />
      <StaticExampleCardBody />
    </Card>
  );
};

export default StaticExample;
