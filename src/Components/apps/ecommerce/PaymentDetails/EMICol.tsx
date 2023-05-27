import { Card, CardBody, Col, FormGroup, Input } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import {  EMI,   Submit } from "../../../../Constant";
import { Btn, Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import SelectBoxBankName from "./SelectBoxBankName";
import SelectBoxCardName from "./SelectBoxCardName";
import SelectBoxDuration from "./SelectBoxDuration";

const EMICol = () => {
  return (
    <Col xl="4" md="6" className="box-col-6">
      <Card>
        <HeadingCommon Heading={EMI} />
        <CardBody>
          <form className="theme-form row">
            <Col xs="6" className="mb-3 p-r-0"><Input type="text" placeholder="First Name"/></Col>
            <FormGroup className="col-6"><Input type="text" placeholder="Last name"/></FormGroup>
            <FormGroup className="col-6 p-r-0"><Input type="text" placeholder="Pincode"/></FormGroup>
            <SelectBoxBankName/>
            <SelectBoxCardName/>
            <SelectBoxDuration/>
            <FormGroup className="col-12">
              <UL className="simple-list payment-opt flex-row">
                <LI><Image src={dynamicImage("ecommerce/mastercard.png")} alt="mastercard" /></LI>
                <LI><Image src={dynamicImage("ecommerce/visa.png")} alt="visa" /></LI>
                <LI><Image src={dynamicImage("ecommerce/paypal.png")} alt="paypal" /></LI>
              </UL>
            </FormGroup>
            <Col xs="12">
              <Btn className="btn-primary-gradien d-block w-100">{Submit}</Btn>
            </Col>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EMICol;
