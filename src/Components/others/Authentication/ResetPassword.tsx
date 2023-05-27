import {  Col, Container, Row } from "reactstrap";
import { dynamicImage } from "../../../Service";
import { Image } from "../../../AbstractElements";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid>
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12" className="p-0">
              <div className="auth-innerright auth-minibox">
                <div className="authentication-box auth-minibox1">
                  <div className="text-center">
                    <Image
                      src={dynamicImage("other-images/xolo-logo.png")}
                      alt="xolo-logo"
                    />
                  </div>
                  <ResetPasswordForm />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ResetPassword;
