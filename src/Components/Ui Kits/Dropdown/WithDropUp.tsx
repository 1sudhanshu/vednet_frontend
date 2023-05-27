import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu, DropdownToggle,} from "reactstrap";
import HeadingCommon from "../../../Common/HeadingCommon";
import { useState } from "react";

const WithDropUp = () => {
const span =`Use a class<code>.drop-up</code>`
const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon
          Heading="Dropdown With DropUp"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <div className="dropup-basic">
            <Dropdown direction="up" isOpen={open} toggle={toggle}>
              <DropdownToggle color="primary" className="dropbtn">
                DropdownButton
                <span>
                  <i className="icofont icofont-arrow-up"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem href="#">{"Link 1"}</DropdownItem>
                <DropdownItem href="#">{"Link 2"}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDropUp;
