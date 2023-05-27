import { Image, P } from "../../../../AbstractElements";
import { ChatMessage, ChatTime } from "../../../../Constant";

const FirstChat = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="d-flex left-side-chat">
      <Image
        className="rounded-circle chat-user-img img-50 m-r-20"
        src={dynamicImage("user/12.jpg")}
        alt=""
      />
      <div className="flex-grow-1">
        <span className="f-12 d-block">{ChatTime}4:07 PM</span>
        <div className="message-main">
          <P className="mb-0 f-12">{ChatMessage}</P>
        </div>
      </div>
    </div>
  );
};

export default FirstChat;
