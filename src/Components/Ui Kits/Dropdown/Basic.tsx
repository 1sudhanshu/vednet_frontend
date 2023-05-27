import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { Href } from "../../../Constant";
import { useState } from "react";

const Basic = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="Basic Dropdown" />
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle color="primary">
                  DropdownButton
                  <span>
                    <i className="icofont icofont-arrow-down"></i>
                  </span>
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem href={Href}>Action</DropdownItem>
                <DropdownItem href={Href}>AnotherAction</DropdownItem>
                <DropdownItem href={Href}>SomethingElseHere</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
