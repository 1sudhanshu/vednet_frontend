import { Fragment } from "react";
import { Likes, NewLikesThisWeek, View } from "../../../../../Constant";
import { Btn, H5, Image } from "../../../../../AbstractElements";
import MessagesAndNotify from "./MessagesAndNotify";

const MariadeoProfileBody = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <div className="d-flex">
        <Image
          className="img-50 img-fluid rounded-circle me-3"
          src={dynamicImage("1.jpg")}
          alt="MariadeoProfile"
        />
        <MessagesAndNotify />
      </div>
      <div className="social-btngroup d-flex">
        <Btn color="primary" className="w-100">{Likes}</Btn>&nbsp;
        <Btn color="light" className="w-100">{View}</Btn>
      </div>
      <div className="likes-profile text-center">
        <H5>
          <span>
            <i className="fa fa-heart font-danger" /> 884
          </span>
        </H5>
      </div>
      <div className="text-center">35 {NewLikesThisWeek}</div>
    </Fragment>
  );
};

export default MariadeoProfileBody;