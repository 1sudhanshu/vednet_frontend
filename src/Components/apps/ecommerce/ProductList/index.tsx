import { Card, Col, Container, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import {
  productListHeading,
  productListHeadingSpan,
} from "../../../../Constant";
import DataTable from "react-data-table-component";
import {
  productTableColumns,
  productTableData,
} from "../../../../Data/apps/ecommerce/productListTableData";

const ProductListContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon
              Heading={productListHeading}
              span
              dangerouslySetInnerHTML={productListHeadingSpan}
            />
            <div className="card-body">
              <div className="table-responsive product-table">
                <DataTable
                data={productTableData}
                columns={productTableColumns}
                className="display dataTable no-footer"
                noHeader
                pagination
                paginationServer/>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListContainer;
