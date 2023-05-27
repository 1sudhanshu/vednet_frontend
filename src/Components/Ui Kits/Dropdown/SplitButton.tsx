import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu, DropdownToggle,} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import SplitButtonDropdown from "./SplitButtonDropdown";
import { SplitData } from "../../../Data/Components/UiKits/Dropdown";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const SplitButton = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Col sn="12" xl="12">
      <Card>
      <HeadingCommon Heading="Dropdown Split Button" />
        <CardBody>
          <div className="dropdown-basic">
            <div className="btn-group">
              <Btn color="primary">Primary Button</Btn>
              <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
                <DropdownToggle color="primary">
                  <i className="icofont icofont-arrow-down"></i>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="#">Link 1</DropdownItem>
                  <DropdownItem href="#">Link 1</DropdownItem>
                  <DropdownItem href="#">Link 1</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {SplitData.map((items, i) => (
              <SplitButtonDropdown key={i} item={items} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButton;
