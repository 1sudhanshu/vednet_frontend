import { Card, CardBody, Col, FormGroup, Input, Label } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Debitcard, ExpirationDate, Submit } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import SelectBoxMonth from "./SelectBoxMonth";
import SelectBoxYear from "./SelectBoxYear";

const DebitCardCol = () => {
  return (
    <Col xl="4" md="6" className="box-col-6 debit-card">
      <Card>
        <HeadingCommon Heading={Debitcard} />
        <CardBody>
          <form className="theme-form e-commerce-form row">
            <FormGroup className="mb-3 col-6 p-r-0">
              <Input type="text" placeholder="Full name here" />
            </FormGroup>
            <FormGroup className="mb-3 col-6">
              <Input type="text" placeholder="Card number" />
            </FormGroup>
            <FormGroup className="mb-3 col-6 p-r-0">
              <Input type="text" placeholder="CVV number" />
            </FormGroup>
            <FormGroup className="mb-3 col-6">
              <Input type="text" placeholder="CVC" />
            </FormGroup>
            <Col xs="12">
              <Label className="col-form-label p-t-0">{ExpirationDate}</Label>
            </Col>
            <SelectBoxMonth />
            <SelectBoxYear />
            <Col xs="12">
              <Btn className="btn-primary-gradien d-block w-100">{Submit}</Btn>
            </Col>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DebitCardCol;
