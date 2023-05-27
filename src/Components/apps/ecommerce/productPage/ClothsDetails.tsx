import { Febric, Video, Details, Brand, Href } from "../../../../Constant";
import { Fragment, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import ClothsDetailsTabContent from "./ClothsDetailsTabContent";

const ClothsDetails = () => {
  let ClothsDetailsData = [Febric, Video, Details, Brand];
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Fragment>
      <Nav tabs className="border-tab mb-0">
        {ClothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index+1 ? "active" : ""} onClick={() => setActiveTab(index+1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ClothsDetailsTabContent activeTab={activeTab} />
    </Fragment>
  );
};
export default ClothsDetails;
