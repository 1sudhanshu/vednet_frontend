import { Col, Input, Label, Row } from "reactstrap";
import { CashOnDelivery, CheckPayments, PayPal } from "../../../../Constant";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const PaymentOptions = () => {
  return (
    <div className="animate-chk">
      <Row>
        <Col>
          <Label className="d-block" htmlFor="edo-ani">
            <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani"/>
            {CheckPayments}
          </Label>
          <Label className="d-block" htmlFor="edo-ani1">
            <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani"/>
            {CashOnDelivery}
          </Label>
          <Label className="d-block" htmlFor="edo-ani2">
            <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani"/>
            {PayPal}
            <Image className="img-paypal img-fluid" src={dynamicImage("checkout/paypal.png")} alt="paypal"/>
          </Label>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentOptions;
