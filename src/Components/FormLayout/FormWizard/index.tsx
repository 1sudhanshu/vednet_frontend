import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { H5 } from "../../../AbstractElements";
import { FormWizardWithIcon } from "../../../Constant";
import Registration from "./Registration";
import Emails from "./Email";
import Birthdate from "./Birthdate";
import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";

const FormWizardContainer = () => {
  const [goSteps, setGoSteps] = useState(0);
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H5>{FormWizardWithIcon}</H5>
            </CardHeader>
            <CardBody>
              <Stepper activeStep={goSteps}>
                <Step onClick={() => setGoSteps(0)} label="StepOne" />
                <Step onClick={() => setGoSteps(1)} label="StepTwo" />
                <Step onClick={() => setGoSteps(2)} label="StepThree" />
              </Stepper>
              {goSteps === 0 && (<Registration setGoSteps={setGoSteps} />)}
              {goSteps === 1 && (<Emails goSteps={goSteps} setGoSteps={setGoSteps} />)}
              {goSteps === 2 && (<Birthdate goSteps={goSteps} setGoSteps={setGoSteps} />)}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default FormWizardContainer;