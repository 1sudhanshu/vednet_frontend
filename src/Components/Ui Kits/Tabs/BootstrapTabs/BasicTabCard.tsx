import  { useState } from "react";
import {Card,CardBody,Col,Dropdown,DropdownItem,DropdownMenu,DropdownToggle,Nav,NavItem,NavLink,TabContent,TabPane,} from "reactstrap";
import {  P } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";

const BasicTabCard = () => {
  const [BasicTab, setBasicTab] = useState("1");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Col sm="12" xl="6 xl-100">
      <Card>
        <HeadingCommon Heading="Basic Tabs" />
        <CardBody>
          <Nav tabs>
            <NavItem><NavLink href="#javascript" className={BasicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>Home</NavLink></NavItem>
            <Dropdown className="nav-item" isOpen={dropdownOpen} toggle={toggle}>
              <NavItem> 
                <DropdownToggle className="nav-link" tag="a" href="#javascript" color="default" caret>Dropdown</DropdownToggle>
                <DropdownMenu>
                  <NavLink href="#javascript" className={BasicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>Action</NavLink>
                  <DropdownItem href="#javascript">Another action</DropdownItem>
                  <DropdownItem href="#javascript">Something else here</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#javascript">Separated link</DropdownItem>
                </DropdownMenu>
              </NavItem>
            </Dropdown>
            <NavItem><NavLink href="#javascript" className={BasicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>Profile</NavLink></NavItem>
            <NavItem><NavLink href="#javascript" className={BasicTab === "4" ? "active" : ""} onClick={() => setBasicTab("4")}>Contact</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            <TabPane className="fade show" tabId="1"><P className="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions ofLorem Ipsum</P></TabPane>
            <TabPane tabId="2"><P className="mb-0 m-t-30">Lorem Ipsum is 111 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</P></TabPane>
            <TabPane tabId="3"><P className="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</P></TabPane>
            <TabPane tabId="4"><P className="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It waspopularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions ofLorem Ipsum</P></TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTabCard;
