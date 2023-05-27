import { Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Ago, AlexendraDhadio, AlexendraDhadioParagraph, Href,  MoreCommnets } from "../../../../../Constant";
import OliviaJonMessage from "./OliviaJonMessage";
import JasonBorneMessage from './JasonBorneMessage';
import IssaBellMessage from './IssaBellMessage';
const SocialChat = () => {
  return (
    <div className="social-chat">
      <JasonBorneMessage/>
      <div className="other-msg">
        <div className="d-flex">
          <Image className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={dynamicImage("user/2.png")}/>
          <div className="flex-grow-1">
            <span className="f-w-600">
              {AlexendraDhadio}&nbsp;
              <span>
                1 Month {Ago} <i className="fa fa-reply font-primary" />
              </span>
            </span>
            <P>{AlexendraDhadioParagraph}</P>
          </div>
        </div>
      </div>
      <OliviaJonMessage />
      <IssaBellMessage />
      <div className="text-center">
        <a href={Href}>{MoreCommnets}</a>
      </div>
    </div>
  );
};

export default SocialChat;
