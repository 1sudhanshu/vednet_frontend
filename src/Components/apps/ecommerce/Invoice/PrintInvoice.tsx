import { P, Image } from "../../../../AbstractElements";
import { Col, Form, Row } from "reactstrap";
import { ThankBusiness, ThankBusinessDesc } from "../../../../Constant";
import { dynamicImage } from "../../../../Service";

const PrintInvoice = () => {
  return (
      <Row className="mt-3">
        <Col md="8">
          <div>
            <P className="legal">
              <strong>{ThankBusiness}</strong> {ThankBusinessDesc}
            </P>
          </div>
        </Col>
        <Col md="4">
          <Form className="text-end invo-pal">
            <Image
              src={dynamicImage("other-images/paypal.png")}
              alt="PayPal - The safer, easier way to pay online!"
            />
          </Form>
        </Col>
      </Row>
  );
};
export default PrintInvoice;
