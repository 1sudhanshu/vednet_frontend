import { Card } from "reactstrap";
import { CustomSelections } from "../../../../Constant";
import CustomSelectionCardBody from "./CustomSelectionCardBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const CustomSelection = () => {
  return (
    <Card>
      <HeadingCommon Heading={CustomSelections} />
      <CustomSelectionCardBody />
    </Card>
  );
};

export default CustomSelection;
