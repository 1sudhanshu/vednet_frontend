import { Card, CardBody, Col, FormGroup, Input } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { COD, Submit } from "../../../../Constant";
import { Btn } from "../../../../AbstractElements";
import { cashOnDeliveryFormData } from "../../../../Data/apps/ecommerce/orderHistory";

const CodCol = () => {
  return (
    <Col xl="4" md="6" className="box-col-6">
      <Card>
        <HeadingCommon Heading={COD} />
        <CardBody>
          <form className="theme-form row">
            {cashOnDeliveryFormData.map((data, index) => (
              <FormGroup className={`mb-3 col-6 ${data.formGroupClassName}`} key={index}>
                <Input type="text" placeholder={data.PlaceHolder} />
              </FormGroup>
            ))}
            <FormGroup className="mb-3 col-12">
              <textarea className="form-control" rows={3} placeholder="Address"/>
            </FormGroup>
            <Col xs="12"><Btn className="btn btn-primary-gradien d-block w-100">{Submit}</Btn></Col>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CodCol;
