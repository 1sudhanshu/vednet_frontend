import { Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import MailSidebar from "../EmailApp/MailSidebar";
import ComposeMessage from "./ComposeMessage";

const EmailComposeContainer = () => {
  return (
    <Container fluid={true}>
      <div className="email-wrap emailcompose-items">
        <Row>
          <Col xl="3" md="6" className="xl-30 box-col-3">
            <MailSidebar />
          </Col>
          <Col xl="9" md="12" className="xl-70 box-col-9">
            <ComposeMessage />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EmailComposeContainer;
