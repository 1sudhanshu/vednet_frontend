import { Card, Col, CardBody, Row } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ToggleSubNav from "./ToggleSubNav";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicNav from "./DynamicNav";

const SubNav = () => {
  return (
    <Col xl="6" className="xl-60" lg="12">
      <Card>
        <HeadingCommon Heading="Sub Nav" />
        <CardBody>
          <Row>
            <Col lg="6">
              <div>
                <H5>Static Sub Nav</H5>
              </div>
              <DynamicNav />
            </Col>
            <ToggleSubNav />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SubNav;
