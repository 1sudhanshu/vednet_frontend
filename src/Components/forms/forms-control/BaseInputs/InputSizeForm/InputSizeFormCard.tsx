import { Card } from "reactstrap";
import { InputSizing } from "../../../../../Constant";
import InputSizeFormCardBody from "./InputSizeFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const InputSizeFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={InputSizing} />
      <InputSizeFormCardBody />
    </Card>
  );
};

export default InputSizeFormCard;
