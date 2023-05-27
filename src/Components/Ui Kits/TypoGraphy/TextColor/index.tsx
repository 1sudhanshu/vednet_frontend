import { Card, CardBody, Col } from "reactstrap";
import DyanmicTextColor from "./DyanmicTextColor";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { P } from "../../../../AbstractElements";

const TextColor = () => {
  const span = `You can Give text color by using txt-* class`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon dangerouslySetInnerHTML={span} Heading="Text Color" />
        <CardBody>
          <P className="txt-primary">This is Primary text You can archive this adding<code>.txt-primary</code> class</P>
          <DyanmicTextColor />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColor;
