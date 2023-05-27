import {  Total,} from "../../../../Constant";
import { H6,  P } from "../../../../AbstractElements";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceDescription from "./InvoiceDescription";
import PrintInvoice from "./PrintInvoice";
import { Col, Label, Row, Table, Container, CardBody, Card } from "reactstrap";
import React, { LegacyRef } from "react";
import { useSelector } from "react-redux";
import { EcommerceRootState, cartType } from "../ReducerTypes";
import {getCartTotal,getallCardTotal,} from "../../../../Service/Ecommerce.service";
import TableHeadings from "./TableHeadings";

const ItemDescription = React.forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined ) => {
  const { cart } = useSelector((state: EcommerceRootState) => state.CartReducer);
  const { symbol } = useSelector((state: EcommerceRootState) => state.ProductReducer);

  return (
    <div ref={ref}>
      <Container className="invoice">
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div>
                  <InvoiceHeader />
                  <InvoiceDescription />
                  <div className="table-responsive invoice-table mt-3" id="table">
                    <Table bordered striped>
                      <tbody>
                        <TableHeadings/>
                        {cart?.map((item: cartType) => (
                          <tr key={item.id}>
                            <td>
                              <Label className="mb-2">{item.name}</Label>
                              <P>{item.note}</P>
                            </td>
                            <td><P className="itemtext digits"> {symbol} {item.qty}</P></td>
                            <td><P className="itemtext digits">{symbol}{item.discountPrice}</P></td>
                            <td className="payment digits"><P className="itemtext digits"> {symbol} {getCartTotal(item)}</P></td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td></td>
                          <td className="Rate"><H6 className="mb-0 p-2">{Total}</H6></td>
                          <td className="payment degits"><H6 className="mb-0 p-2">{symbol}{getallCardTotal(cart)}</H6></td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <PrintInvoice />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ItemDescription;
