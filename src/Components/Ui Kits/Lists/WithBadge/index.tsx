import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicWithBadge from "./DynamicWithBadge";

const WithBadge = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="With Badges" />
        <CardBody>
          <UL className='simple-list'>
            <LI className="d-flex justify-content-between align-items-center">
              Cras justo odio
              <span className="badge badge-primary counter digits">14</span>
            </LI>
            <DynamicWithBadge />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadge;
