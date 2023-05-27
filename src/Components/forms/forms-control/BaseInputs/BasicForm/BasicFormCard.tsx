import { Card } from "reactstrap";
import { BasicFormControl } from "../../../../../Constant";
import BasicFormCardBody from "./BasicFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const BasicFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={BasicFormControl} />
      <BasicFormCardBody />
    </Card>
  );
};

export default BasicFormCard;
