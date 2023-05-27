import { Fragment } from "react";
import { Image, LI, UL } from "../../../../AbstractElements";
import { ArrowRight, UserPlus } from "react-feather";
import { Href } from "../../../../Constant";

const ViewMembers = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Image
        className="img-50 align-top m-r-15 rounded-circle"
        src={dynamicImage("1.jpg")}
        alt="121"
      />
      <UL className="flex-row simple-list">
        <LI>
          <a href={Href}>
            <UserPlus />
          </a>
        </LI>
        <LI>
          <a href={Href}>
            <ArrowRight />
          </a>
        </LI>
      </UL>
    </Fragment>
  );
};

export default ViewMembers;
