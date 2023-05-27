import { Nav, NavLink, NavItem } from "reactstrap";
import { propsType } from "./UserProfile";
import { useState, Fragment } from "react";
import {  Friends, Href, Photos } from "../../../Constant";

const NavBarMain = ({ callback }: propsType) => {
  const [activeTab, setActiveTab] = useState(1);
  const NavBarData = [
    { id: 1, tittle: "Timline" },
    { id: 2, tittle: "About" },
    { id: 5, userProfile: true },
    { id: 3, tittle: Friends },
    { id: 4, tittle: Photos },
  ];
  return (
    <Nav tabs className="border-tab tabs-scoial">
      {NavBarData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
          <NavItem>
            <div className="user-designation" />
            <div className="title">
              <a href={Href}>ElANA</a>
            </div>
            <div className="desc mt-2">general manager</div>
          </NavItem>
          ) : (
          <NavItem className="nav">
            <NavLink
              className={activeTab === data.id ? "active" : ""}
              onClick={() => {
                setActiveTab(data.id);
                callback(data.id);
              }}
            >
              {data.tittle}
            </NavLink>
          </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  );
};

export default NavBarMain;
