import { Card } from "reactstrap";
import DefaultTypeaheadCardBody from "./DefaultTypeaheadCardBody";
import { BasicDemo } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";

const DefaultTypeahead = () => {
  return (
    <Card>
      <HeadingCommon Heading={BasicDemo} dangerouslySetInnerHTML="This is the simple demo for Typeahead." />
      <DefaultTypeaheadCardBody />
    </Card>
  );
};

export default DefaultTypeahead;
