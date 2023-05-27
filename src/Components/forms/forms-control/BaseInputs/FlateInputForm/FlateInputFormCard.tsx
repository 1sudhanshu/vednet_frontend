import { Card } from "reactstrap";
import { FlatStyle } from "../../../../../Constant/index";
import FlateInputFormCardBody from "./FlateInputFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const FlateInputFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={FlatStyle} />
      <FlateInputFormCardBody />
    </Card>
  );
};

export default FlateInputFormCard;
