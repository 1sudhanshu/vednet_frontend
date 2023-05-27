import { Card } from "reactstrap";
import { EdgesInputStyle } from "../../../../../Constant";
import EdgesInputFormCardBody from "./EdgesInputFormCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const EdgesInputFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={EdgesInputStyle} />
      <EdgesInputFormCardBody />
    </Card>
  );
};

export default EdgesInputFormCard;
