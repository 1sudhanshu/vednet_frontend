import { Col, Card, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import PaginationSizing1 from "./PaginationSizing1";
import PaginationSizing2 from "./PaginationSizing2";

const PaginationSizingClass = () => {
  return (
    <Col xl="12">
      <Card>
        <HeadingCommon Heading="Pagination Sizing" />
        <CardBody>
          <PaginationSizing1 />
          <PaginationSizing2 />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizingClass;
