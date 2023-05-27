import { Image, P } from "../../../../AbstractElements";
import { ChatMessage2, ChatTime } from "../../../../Constant";

const SecondChat = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="d-flex right-side-chat">
      <div className="flex-grow-1 text-end">
        <span className="f-12 d-block">{ChatTime} 4:10 PM</span>
        <div className="message-main pull-right">
          <P className="mb-0 text-start">{ChatMessage2}</P>
          <div className="clearfix" />
        </div>
      </div>
      <Image
        className="rounded-circle chat-user-img img-50 m-l-20"
        src={dynamicImage("user/2.jpg")}
        alt=""
      />
    </div>
  );
};

export default SecondChat;
