import { Card, CardBody, Col, Container, Row } from "reactstrap";
import LargeShadows from "./LargeShadows";
import NoShadows from "./NoShadows";
import RegularShadows from "./RegularShadows";
import SmallShadows from "./SmallShadows";
import HeadingCommon from "../../../Common/HeadingCommon";
const ShadowContainer = () => {
  const span = `
  While shadows on components are disabled by default in Bootstrap and can be enabled via <code>{'$enable-shadows'}</code>, {'you can also quickly add or remove a shadow with our'} <code>{'box-shadow'}</code> {'utility classes. Includes support for'} <code>{'.shadow-none'}</code> and three default sizes (which have associated variables to match).`;

  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card className="box-shadow-title">
            <HeadingCommon
              Heading="Custom Height Progress Bars"
              dangerouslySetInnerHTML={span}
            />
            <CardBody>
              <Row>
                <LargeShadows />
                <RegularShadows />
                <SmallShadows />
                <NoShadows />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ShadowContainer;
