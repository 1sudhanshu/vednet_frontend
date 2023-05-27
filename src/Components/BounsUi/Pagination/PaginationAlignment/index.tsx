import { Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import Pagination1 from "./Pagination1";
import Pagination2 from "./Pagination2";
import Pagination3 from "./Pagination3";

const PaginationAlignmentClass = () => {
  return (
    <Col xl="12">
      <Card>
        <HeadingCommon Heading="Pagination Alignment" />
        <CardBody>
          <Pagination1 />
          <Pagination2 />
          <Pagination3 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignmentClass;
