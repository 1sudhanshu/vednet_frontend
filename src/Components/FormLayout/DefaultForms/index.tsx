import { Col, Container, Row } from "reactstrap";
import DefaultLayoutCard from "./DefaultLayout/DefaultLayoutCard";
import HorizontalLayoutCard from "./HorizontalLayout/HorizontalLayoutCard";
import MegaFormsCard from "./MegaForms/MegaFormsCard";
import InlineFormCard from "./InlineForm/InlineFormCard";
const DefaultFormsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        {/* <Col sm="12" xl="6">
          <Row>
            <DefaultLayoutCard />
            <HorizontalLayoutCard />
          </Row>
        </Col> */}
        <Col sm="12" xl="6">
          <Row>
            <MegaFormsCard />
            {/*<InlineFormCard />*/}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultFormsContainer;
