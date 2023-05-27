import { Btn } from "../../../../AbstractElements";
import { Fragment, useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

interface itemsarray {
  item?: string;
  divider?: boolean;
}
interface itemarray {
  btnclass?: string;
  btnColor?: string;
  btnText: string;
  items: itemsarray[];
}
interface propsTypes {
  item: itemarray;
}

const CommonDropDown = (props: propsTypes) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <div className="btn-group mb-0">
        <DropdownToggle
          className={`dropbtn ${props.item.btnclass}`}
          color={props.item.btnColor}
        >
          {props.item.btnText}
          <span>
            <i className="icofont icofont-arrow-down"></i>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          {props.item.items.map((dropdownItem: any, i: number) => (
            <Fragment key={i}>
              {dropdownItem.item ? (
                <DropdownItem href="#">{dropdownItem.item}</DropdownItem>
              ) : (
                ""
              )}
              {dropdownItem.divider ? <DropdownItem divider /> : ""}
            </Fragment>
          ))}
        </DropdownMenu>
      </div>
    </Dropdown>
  );
};

export default CommonDropDown;
