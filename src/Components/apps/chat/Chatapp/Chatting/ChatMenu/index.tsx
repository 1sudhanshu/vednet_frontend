import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Call, Profile, STATUS } from "../../../../../../Constant";
import { useState } from "react";
import ChatMenuTabContent from "./ChatMenuTabContent";
import { useSelector } from "react-redux";
import { ChatAppTypes } from "../../../ChatAppTypes";

const ChatMenu = () => {
  const { toggleSideBar } = useSelector((state: ChatAppTypes) => state.ChatReducer);
  const [activeTab, setActiveTab] = useState(1);
  const chatMenuNavData = [Call, STATUS, Profile];
  return (
    <Col className={`chat-menu chat-menu-col ps-xl-0 ${toggleSideBar ?"show":""}`}>
      <Nav tabs className="border-tab nav-primary">
        {chatMenuNavData.map((data, index) => (
          <NavItem key={index}>
            <NavLink
              className={activeTab === index + 1 ? "active" : ""}
              onClick={() => setActiveTab(index + 1)}
              style={{ cursor: "pointer" }}
            >
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ChatMenuTabContent activeTab={activeTab} />
    </Col>
  );
};

export default ChatMenu;
