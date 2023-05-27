import { Card } from "reactstrap";
import { RaiseInputStyle } from "../../../../../Constant";
import RaiseInputFormCardBody from "./RaiseInputFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const RaiseInputFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={RaiseInputStyle} />
      <RaiseInputFormCardBody />
    </Card>
  );
};

export default RaiseInputFormCard;
