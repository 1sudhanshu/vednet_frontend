import { Container, Row, Col } from "reactstrap";
import BasicHtmlFormCard from "./BasicHtmlForm/BasicHtmlFormCard";
import EdgesInputFormCard from "./EdgesInputForm/EdgesInputFormCard";
import RaiseInputFormCard from "./RaiseInputForm/RaiseInputFormCard";
import SolidInputFormCard from "./SolidInputForm/SolidInputFormCard";
import InputSizeFormCard from "./InputSizeForm/InputSizeFormCard";
import CustomFormCard from "./CustomForm/CustomFormCard";
import BasicFormCard from "./BasicForm/BasicFormCard";
import FlateInputFormCard from "./FlateInputForm/FlateInputFormCard";

const BaseInputsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <BasicFormCard />
          <BasicHtmlFormCard />
          <EdgesInputFormCard />
          <FlateInputFormCard />
          <RaiseInputFormCard />
          <SolidInputFormCard />
          <InputSizeFormCard />
          <CustomFormCard />
        </Col>
      </Row>
    </Container>
  );
};

export default BaseInputsContainer;
