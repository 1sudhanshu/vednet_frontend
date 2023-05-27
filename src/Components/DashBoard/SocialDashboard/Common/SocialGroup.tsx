import { Image, LI, UL } from "../../../../AbstractElements";
import { UserCardImageSrc } from "../../../../Data/DashBoard/Social Dashboard/Common";
import { MutualFriends } from "../../../../Constant";

const SocialGroup = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <div className="customers text-center social-group">
      <UL className="mt-0 d-block">
        {UserCardImageSrc.map((data, index) => (
          <li key={index} className="d-inline-block">
            <Image
              className="img-40 rounded-circle"
              src={dynamicImage(data)}
              alt=""
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="top"
            />
          </li>
        ))}
        <LI className="d-inline-block border-0 p-0">
          <span className="f-12">{MutualFriends}</span>
        </LI>
      </UL>
    </div>
  );
};

export default SocialGroup;
