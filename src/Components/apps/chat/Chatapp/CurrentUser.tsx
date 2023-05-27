import { Image } from "../../../../AbstractElements";
import { ChatStatus, MarkJecno } from "../../../../Constant";
import { dynamicImage } from "../../../../Service";

const CurrentUser = () => {
  return (
    <div className="d-flex">
      <Image
        className="rounded-circle user-image"
        src={dynamicImage("user/12.png")}
        alt="user"
      />
      <div className="about">
        <div className="name f-w-600">{MarkJecno}</div>
        <div className="status">{ChatStatus}</div>
      </div>
    </div>
  );
};

export default CurrentUser;
