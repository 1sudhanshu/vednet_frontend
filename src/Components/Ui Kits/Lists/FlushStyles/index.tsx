import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicFlushStyle from "./DynamicFlushStyle";

const FlushStyles = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Flush Style" />
        <CardBody>
          <UL className="list-group-flush simple-list">
            <LI>Cras justo odio</LI>
            <DynamicFlushStyle />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyles;
