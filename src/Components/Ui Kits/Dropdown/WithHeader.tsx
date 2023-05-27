import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu, DropdownToggle,} from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const WithHeader = () => {
  const span = `Use a class<code>.dropdown-header</code>`;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon
          Heading="Dropdown With Header"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle color="primary" className="dropbtn">
                DropdownButton
                <span>
                  <i className="icofont icofont-arrow-down"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem header>DropdownHeader</DropdownItem>
                <DropdownItem href="#">{"Link 1"}</DropdownItem>
                <DropdownItem href="#">{"Link 2"}</DropdownItem>
                <DropdownItem header>DropdownHeader</DropdownItem>
                <DropdownItem href="#">AnotherLink</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithHeader;
