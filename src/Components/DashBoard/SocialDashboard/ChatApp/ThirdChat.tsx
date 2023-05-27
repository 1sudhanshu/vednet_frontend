import { Image, LI, P, UL } from "../../../../AbstractElements";
import { ChatMessage3, ChatTime } from "../../../../Constant";

const ThirdChat = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="d-flex left-side-chat">
      <Image className="rounded-circle chat-user-img img-50 m-r-20" src={dynamicImage("user/12.jpg")} alt=""/>
      <div className="flex-grow-1">
        <span className="f-12 d-block">{ChatTime} 4:15 PM</span>
        <div className="message-main">
          <P>{ChatMessage3}</P>
          <UL className="flex-row simple-list">
            <LI><Image className="img-50 m-r-5 b-r-8" src={dynamicImage("email/1.jpg")} alt="Image1"/></LI>
            <LI><Image className="img-50 b-r-8" src={dynamicImage("email/2.jpg")} alt="Image2"/></LI>
          </UL>
        </div>
      </div>
    </div>
  );
};

export default ThirdChat;
