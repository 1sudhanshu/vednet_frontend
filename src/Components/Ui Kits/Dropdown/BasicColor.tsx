import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,} from "reactstrap";
import { BasicColorData } from "../../../Data/Components/UiKits/Dropdown";
import CommonDropDown from "./common/CommonDropDown";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const BasicColor = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="Basic Color Dropdown" />
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown isOpen={open} toggle={toggle}>
              <div className="btn-group mb-0">
                <DropdownToggle color="primary" className="dropbtn">
                  Action
                  <span>
                    <i className="icofont icofont-arrow-down"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">AnotherAction</DropdownItem>
                  <DropdownItem href="#">SomethingElseHere</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#">{"Separated Link"}</DropdownItem>
                </DropdownMenu>
              </div>
            </Dropdown>
            {BasicColorData.map((items, i) => (
              <CommonDropDown key={i} item={items} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColor;
