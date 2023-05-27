import { Card, Col, CardHeader, CardBody } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ContactUsForm from "./ContactUsForm";
import { ContactUsHeaing } from "../../../../Constant";

const ContactUs = () => {
  return (
    <Col sm="12" lg="6" xl="8" md="12" className=" xl-50 box-col-6">
      <Card className=" height-equal">
        <CardHeader>
          <H5>{ContactUsHeaing}</H5>
        </CardHeader>
        <CardBody className="contact-form ">
          <ContactUsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactUs;
