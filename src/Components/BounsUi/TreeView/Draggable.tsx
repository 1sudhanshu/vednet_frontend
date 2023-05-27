import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import DraggableTreeCardBody from "./DraggableTreeCardBody";

const Draggable = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Draggable Tree" />
        <DraggableTreeCardBody />
      </Card>
    </Col>
  );
};

export default Draggable;
