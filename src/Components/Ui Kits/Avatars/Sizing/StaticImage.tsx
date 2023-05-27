import React from "react";
import { Image } from "../../../../AbstractElements";

const StaticImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Image
        body={true}
        className="img-100 rounded-circle"
        src={dynamicImage("1.jpg")}
        alt="#"
      />
  );
};

export default StaticImage;
