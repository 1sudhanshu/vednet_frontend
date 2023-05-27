import { Mail, MessageCircle } from "react-feather";
import { LI, UL } from "../../../AbstractElements";
import { AskOurCommunity, ContactUs, Href } from "../../../Constant";
import { askQuestionData } from "../../../Data/apps/Faq";

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <UL className="simple-list">
        {askQuestionData.map((item, i) => (
          <LI key={i}>
            <a href={Href}>
              {item.icon}
              {item.title}
            </a>
            <span className={item.class}>{item.val}</span>
          </LI>
        ))}
      </UL>
      <UL className="simple-list">
        <LI>
          <a href={Href}>
            <MessageCircle />
            {AskOurCommunity}
          </a>
        </LI>
        <li>
          <a href={Href}>
            <Mail />
            {ContactUs}
          </a>
        </li>
      </UL>
    </div>
  );
};

export default NavigationOption;
