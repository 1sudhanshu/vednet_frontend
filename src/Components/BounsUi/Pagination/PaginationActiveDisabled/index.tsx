import { Col, Card } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import PaginationActiveDisabledCardBody from "./PaginationActiveDisabledCardBody";

const PaginationActiveDisabledClass = () => {
  return (
    <Col xl="12">
      <Card>
        <HeadingCommon Heading="Pagination Active Disabled" />
        <PaginationActiveDisabledCardBody />
      </Card>
    </Col>
  );
};

export default PaginationActiveDisabledClass;
