import { Card,  Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import NoScrollbarCardBody from "./NoScrollbarCardBody";

const NoScrollbar = () => {
  return (
      <Col sm="12" md="6">
        <Card>
          <HeadingCommon Heading="No scrollbar" />
          <NoScrollbarCardBody />
        </Card>
      </Col>
  );
};

export default NoScrollbar;