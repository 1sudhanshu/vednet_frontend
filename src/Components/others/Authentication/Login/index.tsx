import { CardBody, Col, Container, Row } from "reactstrap";
import LoginPage from "./LoginPage";
export interface propsType {
  registerPage?: boolean;
}
const LoginSample = ({ registerPage }: propsType) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <Container fluid className="p-0">
        <div className="authentication-main">
          <Row>
            <Col md="12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <div className="mt-4">
                    <CardBody>
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
export default LoginSample;
