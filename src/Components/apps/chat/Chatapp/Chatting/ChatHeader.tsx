import { Image } from "../../../../../AbstractElements";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChatAppTypes } from "../../ChatAppTypes";
import { dynamicImage } from "../../../../../Service";
import ChatMenuIcons from "./ChatMenuIcons";
import { Typing } from "../../../../../Constant";

const ChatHeader = () => {
  const { selectedUser } = useSelector(
    (state: ChatAppTypes) => state.ChatReducer
  );
  const location = useLocation();

  return (
    <div className="chat-header clearfix">
      <Image className="rounded-circle" src={dynamicImage(selectedUser?.thumb ? selectedUser?.thumb : "user/1.jpg")}alt="user"/>
      <div className="about">
        <div className="name">
          {selectedUser ? selectedUser.name : "Vincent Porter"}
          {location.state ? (<span className="font-primary f-12"> {Typing}</span>) : ("")}
        </div>
        <div className="status digits">
          {selectedUser ? selectedUser.lastSeenDate : "5 May, 5:30 PM"}
        </div>
      </div>
      <ChatMenuIcons />
    </div>
  );
};

export default ChatHeader;
