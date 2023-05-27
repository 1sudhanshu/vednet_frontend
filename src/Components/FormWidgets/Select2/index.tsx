import FullColored from "./FullColored";
import {  Container, Row } from "reactstrap";
import Select2Card from "./Select-2/index";
import OutlineColorCard from "./OutlineColor/index";

const Select2Container = () => {
  return (
    <Container fluid={true}>
      <div className="select2-drpdwn">
        <Row>
          <Select2Card />
          <OutlineColorCard />
          <FullColored />
        </Row>
      </div>
    </Container>
  );
};

export default Select2Container;
