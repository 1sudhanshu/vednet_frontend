import { Card } from "reactstrap";
import BasicHtmlFormCardBody from "./BasicHtmlFormCardBody";
import { BasicHTMLInputControl } from "../../../../../Constant";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const BasicHtmlFormCard = () => {
  return (
    <Card>
      <HeadingCommon Heading={BasicHTMLInputControl} />
      <BasicHtmlFormCardBody />
    </Card>
  );
};

export default BasicHtmlFormCard;
