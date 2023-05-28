import { Card, Col, Container, Row } from "reactstrap";
import { dynamicImage } from "../../../Service";
import { H4, Image } from "../../../AbstractElements";
import ForgetPasswordForm from "./ForgetPasswordForm";
import { ResetYourPassword } from "../../../Constant";

const ForgetPassword = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid>
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12" className="p-0">
              <div className="auth-innerright auth-minibox">
                <div className="reset-password-box">
                  <div className="text-center">
                    <Image src={dynamicImage("other-images/logo_white.png")} alt="logo"/>
                  </div>
                  <Card className="mt-4 mb-0">
                    <H4>{ResetYourPassword}</H4>
                    <ForgetPasswordForm />
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
