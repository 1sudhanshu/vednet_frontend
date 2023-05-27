import { H3,  P } from "../../../../AbstractElements";
import {InvoiceHash,IssuedMay,PaymentDue,} from "../../../../Constant";
import { Col,  Row } from "reactstrap";
import InvoiceHeaderCol from "./InvoiceHeaderCol";

const InvoiceHeader = () => {
  return (
    <div>
      <Row className="invo-header">
        <InvoiceHeaderCol/>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>{InvoiceHash}<span className="digits counter">1069</span></H3>
            <P>{IssuedMay}<span className="digits"> 16, 2023</span><br />{PaymentDue} <span className="digits"> 20, 2023</span></P>
          </div>
        </Col>
      </Row><hr/>
    </div>
  );
};
export default InvoiceHeader;
