import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Creditcard } from "../../../../Constant";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import CreditCardForm from "./CreditCardForm";

const CreditCardCol = () => {
  return (
    <Col xl="8" className="box-col-12">
      <Card>
        <HeadingCommon Heading={Creditcard} />
        <CardBody>
          <Row>
            <Col md="4" className="text-center">
              <Image className="img-fluid" src={dynamicImage("ecommerce/card.png")} alt="card"/>
            </Col>
            <Col md="8">
              <CreditCardForm />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreditCardCol;
