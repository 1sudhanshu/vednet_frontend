import { useState } from "react";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Image, H6, P } from "../../../../AbstractElements";
import { orgList } from "../../../../Data/apps/contact/OrgList";
import { Href } from "../../../../Constant";
interface propType {
  callback: (tab:string)=>void;
}
const NavOrg = ({ callback }: propType) => {
  const images = require.context('../../../../assets/images', true);
  const dynamicImage = (image:string) => {
    return images(`./${image}`);
  };
  const [orgactiveTab, setorgActiveTab] = useState("1");
  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav className="flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
        {orgList.map((item) => (
          <NavItem id="myTab" role="tablist" key={item.id}>
            <NavLink href={Href} className={orgactiveTab === item.activeTab ? "active" : ""}
              onClick={() => { setorgActiveTab(item.activeTab); callback(item.activeTab);}}>
              <div className="d-flex">
                <Image
                  className="p-0 img-50 img-fluid m-r-20 rounded-circle"
                  src={dynamicImage(item.img)}
                  alt="Image"
                />
                <div className="flex-grow-1">
                  <H6>{item.name}</H6>
                  <P>{item.email}</P>
                </div>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default NavOrg;