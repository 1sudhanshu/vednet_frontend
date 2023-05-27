import { useState } from "react";
import { Btn } from "../../../AbstractElements";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

interface itemsArray {
  item: string;
}
interface arrayType {
  btnColor: string;
  btnText: string;
  items: itemsArray[];
}
interface propsTypes {
  item: arrayType;
}

const SplitButtonDropdown = (props: propsTypes) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="btn-group">
      <Btn color={props.item.btnColor}>{props.item.btnText}</Btn>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
        <DropdownToggle color={props.item.btnColor}>
          <i className="icofont icofont-arrow-down"></i>
        </DropdownToggle>
        <DropdownMenu >
          {props.item.items.map((itm, i) => (
            <DropdownItem href="#" key={i}>
              {itm.item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SplitButtonDropdown;
