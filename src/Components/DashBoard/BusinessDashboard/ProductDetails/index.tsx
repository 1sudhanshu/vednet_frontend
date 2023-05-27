import { Card, CardBody, Table } from "reactstrap";
import { Avaiablility, MRP, Name, Sale, Shipping } from "../../../../Constant";
import ProductTableBody from "./ProductTableBody";
import ProductDetailsHeader from "./ProductDetailsHeader";

const ProductDetails = () => {
  return (
    <Card className=" card-with-border total-users-lists">
      <ProductDetailsHeader />
      <CardBody className="p-0">
        <div className="users-total table-responsive product-sales theme-scrollbar">
          <Table className="table table-bordernone">
            <thead>
              <tr>
                <th>{Name}</th>
                <th>{Sale}</th>
                <th>{Shipping}</th>
                <th>{MRP}</th>
                <th>{Avaiablility}</th>
              </tr>
            </thead>
            <ProductTableBody />
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
