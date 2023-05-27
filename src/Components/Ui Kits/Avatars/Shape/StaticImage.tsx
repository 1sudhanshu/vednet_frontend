import React from "react";
import { Image } from "../../../../AbstractElements";

const StaticImage = () => {
    const images = require.context("../../../../assets/images/user", true);
    const dynamicImage = (image: string) => {
      return images(`./${image}`);
    };
  return (
    <div className="avatar">
      <Image
        body={true}
        className="img-100 b-r-8"
        src={dynamicImage("1.jpg")}
        alt="#"
      />
    </div>
  );
};

export default StaticImage;
