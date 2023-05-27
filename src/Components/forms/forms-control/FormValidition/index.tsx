import { Col, Container, Row } from "reactstrap";
import CustomForm from "./customForm";
import BrowserDefaultsForm from "./BrowserDefaults";
import FormSupportedElements from "./FormSupportedElements";
import CustomTootltipForm from "./CustomTootltipForm";

const FormValiditionContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <CustomForm />
          <BrowserDefaultsForm />
          <FormSupportedElements />
          <CustomTootltipForm />
        </Col>
      </Row>
    </Container>
  );
};

export default FormValiditionContainer;
