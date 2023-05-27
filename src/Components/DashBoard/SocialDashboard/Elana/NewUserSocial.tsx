import { H6, Image, P } from "../../../../AbstractElements";
import { DateElana, ELANAHeading } from "../../../../Constant";
import { MoreVertical } from "react-feather";

const NewUserSocial = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <div className="new-users-social">
      <div className="d-flex">
        <Image
          className="rounded-circle image-radius m-r-15"
          src={dynamicImage("user/1.jpg")}
          alt=""
        />
        <div className="flex-grow-1">
          <H6 className="mb-0 f-w-700">{ELANAHeading}</H6>
          <P>{DateElana}</P>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  );
};

export default NewUserSocial;
