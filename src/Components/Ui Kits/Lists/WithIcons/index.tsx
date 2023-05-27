import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicWithIcons from "./DynamicWithIcons";

const WithIcons = () => {
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="With Icon" />
        <CardBody>
          <UL className='simple-list'>
            <LI className="list-group-item-action" tag="a" href="#javascript">
              <i className="icon-save-alt"></i>
              {"Cras justo odio"}
            </LI>
            <DynamicWithIcons />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIcons;
