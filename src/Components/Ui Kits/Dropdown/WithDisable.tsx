import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu, DropdownToggle} from "reactstrap";
import { Btn } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const WithDisable = () => {
const span =`Use a class <code>.dropdown-divider</code>`
const [open, setOpen] = useState(false);
const toggle = () => {
  setOpen(!open);
};
  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon
          Heading="Dropdown With Disable"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <div className="dropup-basic">
            <Dropdown className="dropup" isOpen={open} toggle={toggle} direction="up">
              <DropdownToggle color="primary" className="dropbtn">
                DropdownButton{" "}
                <span>
                  <i className="icofont icofont-arrow-up"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem href="#">Normal</DropdownItem>
                <DropdownItem href="#" active>
                  Active
                </DropdownItem>
                <DropdownItem href="#" disabled>
                  Disabled
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDisable;
