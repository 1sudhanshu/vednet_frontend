import { Card, CardBody, Col, FormGroup, Input } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { NetBankingTitle, Submit } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import SelectBoxBankName from "./SelectBoxBankName";

const NetBankingCol = () => {
  return (
    <Col xl="4" md="6"  className="box-col-6">
      <Card>
        <HeadingCommon Heading={NetBankingTitle} />
        <CardBody>
          <form className="theme-form row">
            <FormGroup className="col-12">
              <Input type="text" placeholder="AC Holder name"/>
            </FormGroup>
            <FormGroup className="col-12">
              <Input type="text" placeholder="Account number"/>
            </FormGroup>
            <SelectBoxBankName/>
            <FormGroup className="col-6"><Input type="text" placeholder="ICFC code"/></FormGroup>
            <FormGroup className="col-12"><Input type="number" placeholder="Enter mobile number"/></FormGroup>
            <FormGroup className="col-12"><Input type="text" placeholder="Other Details"/></FormGroup>
            <Col xs="12">
              <Btn className="btn-primary-gradien d-block w-100">{Submit}</Btn>
            </Col>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NetBankingCol;
