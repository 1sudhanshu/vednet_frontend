import { Col, Row } from "reactstrap";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import SendChat from "./SendChat";
import ChatMenu from "./ChatMenu";

const Chatting = () => {
  return (
    <Row className="chat-box">
      <Col className="pe-0 chat-right-aside">
        <div className="chat">
          <ChatHeader />
          <ChatMessage />
          <SendChat />
        </div>
      </Col>
      <ChatMenu />
    </Row>
  );
};

export default Chatting;
