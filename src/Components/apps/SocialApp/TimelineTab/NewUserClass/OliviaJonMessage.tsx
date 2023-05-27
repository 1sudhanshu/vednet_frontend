import { Image, P } from "../../../../../AbstractElements";
import { Ago, OliviaJon, OliviaJonParagraph } from "../../../../../Constant";
import { dynamicImage } from "../../../../../Service";

const OliviaJonMessage = () => {
  return (
    <div className="other-msg">
      <div className="d-flex">
        <Image
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={dynamicImage("user/3.png")}
        />
        <div className="flex-grow-1">
          <span className="f-w-600">
            {OliviaJon}&nbsp;
            <span>
              15 Days {Ago} <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <P>{OliviaJonParagraph}</P>
        </div>
      </div>
    </div>
  );
};

export default OliviaJonMessage;
