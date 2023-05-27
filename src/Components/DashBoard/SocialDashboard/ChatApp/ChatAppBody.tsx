import { CardBody } from "reactstrap";
import FirstChat from "./FirstChat";
import SecondChat from "./SecondChat";
import ThirdChat from "./ThirdChat";
import TypeMessage from "./TypeMessage";

const ChatAppBody = () => {
  return (
    <CardBody className="chat-box messanger-chat pt-0">
      <div className="chat">
        <FirstChat />
        <SecondChat />
        <ThirdChat />
        <TypeMessage />
      </div>
    </CardBody>
  );
};

export default ChatAppBody;
