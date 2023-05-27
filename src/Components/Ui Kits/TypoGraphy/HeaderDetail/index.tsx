import { Row, Col, Card, CardBody } from "reactstrap";
import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicHeaderDetail from "./DynamicHeaderDetail";

const HeaderDetail = () => {
  const span = ` All HTML headings, <code>&lt;h1&gt;</code> through
  <code>&lt;h6&gt;</code>, are available.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Headings" dangerouslySetInnerHTML={span} />
        <CardBody className="typography">
          <Row>
            <Col sm="12" xl="6">
              <H1>This is a Heading 1</H1>
              <H2>This is a Heading 2</H2>
              <H3>This is a Heading 3</H3>
              <H4>This is a Heading 4</H4>
              <H5>This is a Heading 5</H5>
              <H6>This is a Heading 6</H6>
            </Col>
            <DynamicHeaderDetail />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HeaderDetail;
