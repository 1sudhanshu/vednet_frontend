import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row, TabContent } from "reactstrap";
import { EmailApi } from "../../../../api";
import { useDispatch } from "react-redux";
import axios from "axios";
import EmailApplicationContain from "./EmailApplicationContain";
import EmailTabOrg from "./EmailTabOrg";
import MailSidebar from "./MailSidebar";

const EmailAppContainer = () => {
  const dispatch = useDispatch();
  const fetchAllEmailAsyn = async () => {
    try {
      await axios.get(EmailApi).then((resp) => {
        dispatch({ type: "setAllEmails", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAllEmailAsyn();
  }, []);

  const [orgactiveTab, setOrgActiveTab] = useState<string | number>(1);
  const callback = useCallback((tab: number) => {
    setOrgActiveTab(tab);
  }, []);

  return (
    <Container fluid={true}>
      <div className="email-wrap emailapp-items">
        <Row>
          <Col xl="3" md="6" className="box-col-6">
            <MailSidebar />
          </Col>
          <Col xl="3" md="6" className="box-col-6">
            <EmailApplicationContain callback={callback} />
          </Col>
          <Col xl="6" md="12" className="box-col-12">
            <TabContent activeTab={orgactiveTab}>
              <EmailTabOrg />
            </TabContent>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default EmailAppContainer;
