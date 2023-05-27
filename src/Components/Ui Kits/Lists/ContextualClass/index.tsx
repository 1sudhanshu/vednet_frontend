import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicContextualClass from "./DynamicContextualClass";

const ContextualClass = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Contextual Classes" />
        <CardBody>
          <UL className='simple-list'>
            <LI className="list-group-item">{"Dapibus ac facilisis in"}</LI>
            <DynamicContextualClass />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClass;
