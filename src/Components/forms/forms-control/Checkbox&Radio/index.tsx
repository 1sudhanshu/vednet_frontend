import { Container, Row } from "reactstrap";
import CustomRadiosCard from "./CustomRadios/CustomRadiosCard";
import CustomCheckboxsCard from "./CustomCheckboxs/CustomCheckboxsCard";
import AnimatedRadioCard from "./AnimatedRadio/AnimatedRadioCard";
import AnimatedCheckboxCard from "./AnimatedCheckbox/AnimatedCheckboxCard";
import SquareCheckboxsCard from "./SquareCheckboxs/SquareCheckboxsCard";

const CheckboxRadioContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <CustomRadiosCard />
        <CustomCheckboxsCard />
        <AnimatedRadioCard />
        <AnimatedCheckboxCard />
        <SquareCheckboxsCard />
      </Row>
    </Container>
  );
};

export default CheckboxRadioContainer;
