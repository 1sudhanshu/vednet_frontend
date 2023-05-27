import {Col,Card,} from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import PaginationWithIconsCardBody from "./PaginationWithIconsCardBody";

const PaginationWithIconsClass = () => {
  return (
    <Col xl="6">
      <Card>
        <HeadingCommon Heading="Pagination With Icons" />
        <PaginationWithIconsCardBody />
      </Card>
    </Col>
  );
};

export default PaginationWithIconsClass;
