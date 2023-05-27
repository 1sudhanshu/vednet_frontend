import {Button,ButtonGroup,Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu, DropdownToggle,} from "reactstrap";
import CommonDropDown from "./common/CommonDropDown";
import { RoundedData } from "../../../Data/Components/UiKits/Dropdown";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const Rounded = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading="Rounded Dropdown" />
        <CardBody>
          <div className="dropdown-basic">
            <Dropdown isOpen={open} toggle={toggle}>
              <ButtonGroup className="mb-0">
                <DropdownToggle className="dropbtn btn-round" color={"primary"}>
                  Primary button
                  <span>
                    <i className="icofont icofont-arrow-down"></i>
                  </span>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another Action</DropdownItem>
                  <DropdownItem href="#">Something Else Here</DropdownItem>
                  <DropdownItem href="#">Separated Link</DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
            </Dropdown>
            {RoundedData.map((items, i) => (
              <CommonDropDown key={i} item={items} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Rounded;
