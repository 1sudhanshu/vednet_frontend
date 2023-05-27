import MultiplesCardBody from "./MultiplesCardBody";
import { Card } from "reactstrap";
import { MultipleSelections } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";

const Multiples = () => {
  return (
    <Card>
      <HeadingCommon Heading={MultipleSelections} />
      <MultiplesCardBody />
    </Card>
  );
};

export default Multiples;
