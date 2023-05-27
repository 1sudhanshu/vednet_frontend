import React from "react";
import { Card, Col, Container, Row, CardBody } from 'reactstrap';
import HeadingCommon from "../../../Common/HeadingCommon";
import { ListOfTicketOpendByCustomers, SupportTicketList } from "../../../Constant";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";

const SupportTicketContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={SupportTicketList} span dangerouslySetInnerHTML={ListOfTicketOpendByCustomers} />
            <CardBody>
              <TicketList/>
              <TicketTable/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
