import { Card, Row, Nav, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,} from "reactstrap";
import {  H5 } from "../../../../AbstractElements";
import { Col } from "react-bootstrap";
import {Inbox,Markasimportant,More,MovetoTrash,Movetospam,Refresh,} from "../../../../Constant";
import ReademailList from "./ReademailList";
import { useState } from "react";

interface propType {
  callback: (val: number) => void;
}
const EmailApplicationContain = ({ callback }: propType) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);

  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="pe-0 b-r-light">
          <div className="email-top">
            <Row>
              <Col>
                <H5>{Inbox}</H5>
              </Col>
              <Col className="text-end">
                <Dropdown isOpen={dropDownOpen} toggle={toggle}>
                  <DropdownToggle color="deafult" className="bg-transparent p-0 text-muted">{More}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>{Refresh}</DropdownItem>
                    <DropdownItem>{Markasimportant}</DropdownItem>
                    <DropdownItem>{Movetospam}</DropdownItem>
                    <DropdownItem>{MovetoTrash}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
          </div>
          <Nav>
            <ReademailList callback={callback} />
          </Nav>
        </div>
      </Card>
    </div>
  );
};
export default EmailApplicationContain;
