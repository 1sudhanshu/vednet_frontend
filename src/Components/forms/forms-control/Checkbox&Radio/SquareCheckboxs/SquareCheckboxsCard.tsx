import { Col } from "react-bootstrap";
import { Card } from "reactstrap";
import SquareCheckboxsCardBody from "./SquareCheckboxsCardBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { SquareCheckbox } from "../../../../../Constant";

const SquareCheckboxsCard = () => {
  return (
    <Col md="12">
      <Card>
        <HeadingCommon Heading={SquareCheckbox} />
        <SquareCheckboxsCardBody />
      </Card>
    </Col>
  );
};

export default SquareCheckboxsCard;
