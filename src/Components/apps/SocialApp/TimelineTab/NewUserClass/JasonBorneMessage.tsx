import { Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Ago, JasonBorne, JasonBorneParagraph } from "../../../../../Constant";

const JasonBorneMessage = () => {
  return (
    <div className="your-msg">
      <div className="d-flex">
        <Image
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={dynamicImage("user/1.jpg")}
        />
        <div className="flex-grow-1">
          <span className="f-w-600">
            {JasonBorne}&nbsp;
            <span>
              1 Year {Ago} <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <P>{JasonBorneParagraph}</P>
        </div>
      </div>
    </div>
  );
};

export default JasonBorneMessage;
