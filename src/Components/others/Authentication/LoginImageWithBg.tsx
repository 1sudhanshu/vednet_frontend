import { CardBody, Col, Container, Row } from "reactstrap";
import LoginPage from "./Login/LoginPage";
import { propsType } from "./Login";
 const LoginImageWithBg = ({registerPage}:propsType) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12">
              <div className="auth-innerright auth-bg">
                <div className="authentication-box">
                  <div className="mt-4">
                    <CardBody className="p-0">
                      <LoginPage registerPage={registerPage} />
                    </CardBody>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LoginImageWithBg;
