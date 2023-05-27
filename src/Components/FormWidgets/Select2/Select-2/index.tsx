import { Col, Card,  CardBody } from "reactstrap";
import SelectForm from "./SelectForm";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Select2 } from "../../../../Constant/index";

const Select2Card = () => {
  return (
    <Col md="12">
      <Card>
        <HeadingCommon H5ClassName="card-title" Heading={Select2} />
        <CardBody>
          <SelectForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Select2Card;
