import { Card, Col, CardHeader, CardBody, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ProductCardBody from "./ProductCardBody";
import { Details, PRODUCTSCART, Price, Quantity, Status } from "../../../../Constant";

const ProductCard = () => {
  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card>
        <CardHeader>
          <H5>{PRODUCTSCART}</H5>
        </CardHeader>
        <CardBody>
          <div className="user-status table-responsive theme-scrollbar">
            <Table className=" table-bordernone">
              <thead>
                <tr>
                  <th scope="col">{Details}</th>
                  <th scope="col">{Quantity}</th>
                  <th scope="col">{Status}</th>
                  <th scope="col">{Price}</th>
                </tr>
              </thead>
              <ProductCardBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductCard;
