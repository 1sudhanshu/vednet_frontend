import { Col } from "reactstrap";
import { dynamicImage } from "../../../../Service";
import {  Image } from "../../../../AbstractElements";
import { LastSeen, userType } from "../../../../Constant";
import IconsMenuList from "./IconsMenuList";
import ChatHistory from "./ChatHistory";

const VideoCallPage = () => {
  return (
    <Col className="pr-xl-0 chat-right-aside">
      <div className="chat">
        <div className="chat-header clearfix">
          <Image className="rounded-circle" src={dynamicImage("user/8.jpg")} alt="user"/>
          <div className="about">
            <div className="name">
              Kori Thomas&nbsp;&nbsp;
              <span className="font-primary f-12">{userType}</span>
            </div>
            <div className="status digits">{LastSeen} 3:55 PM</div>
          </div>
          <IconsMenuList />
        </div>
        <div className="chat-history">
          <ChatHistory />
        </div>
      </div>
    </Col>
  );
};

export default VideoCallPage;
