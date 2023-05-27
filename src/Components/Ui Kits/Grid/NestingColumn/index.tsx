import { Card } from "reactstrap";
import NestingColumnBody from "./NestingColumnBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const NestingColumn = () => {
  return (
    <Card>
      <HeadingCommon Heading="Nesting Column" />
      <NestingColumnBody />
    </Card>
  );
};
export default NestingColumn;
