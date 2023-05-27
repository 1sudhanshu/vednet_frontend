import { Card } from "reactstrap";
import InlineFormCardBody from "./InlineFormCardBody";
import { Col } from "react-bootstrap";
import { InlineForm } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";

const InlineFormCard = () => {
  const spanText =`Use<code>.form-inline</code>class in the form to style with inline fields.`
  return (
    <Col xl="12">
      <Card>
        <HeadingCommon Heading={InlineForm} dangerouslySetInnerHTML={spanText} />
        <InlineFormCardBody />
      </Card>
    </Col>
  );
};

export default InlineFormCard;
