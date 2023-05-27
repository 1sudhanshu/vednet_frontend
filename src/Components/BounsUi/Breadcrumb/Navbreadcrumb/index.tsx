import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import Breadcrumb1 from "./breadcrumb1";

const Navbreadcrumb = () => {
  const span = `use class <code>.breadcrumb to nav</code> similar to navigation`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Nav breadcrumb" dangerouslySetInnerHTML={span}/>
        <CardBody>
          <Breadcrumb1 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Navbreadcrumb;
