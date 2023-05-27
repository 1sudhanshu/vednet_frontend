import { Box } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicNav from "./DynamicNav";
const InlineNav = () => {
  return (
    <Col xl="6" className="xl-40" lg="12">
      <Card>
        <HeadingCommon Heading="Inline Nav" />
        <CardBody>
          <UL className="icon-lists simple-list border navs-icon inline-nav">
            <LI>
              <a href="#javascripts">
                <Box />
                <span> Base</span>
              </a>
            </LI>
            <DynamicNav />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineNav;
