import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import Draggable from "./Draggable";
import EnhanceTree from "./EnhanceTree";
import CustomTreeOptions from "./CustomTree/CustomTreeOptions";

const TreeViewContainer = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <CustomTreeOptions />
          <Draggable />
          <EnhanceTree />
        </Row>
      </Container>
    </Fragment>
  );
};

export default TreeViewContainer;
