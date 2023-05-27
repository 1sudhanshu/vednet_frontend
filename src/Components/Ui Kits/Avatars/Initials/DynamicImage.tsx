import { Fragment } from "react";
import { imageclass3 } from "../../../../Data/Components/UiKits/Avatars";
import { Image } from "../../../../AbstractElements";

const DynamicImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {imageclass3.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            body={true}
            className={data.className}
            src={dynamicImage("16.png")}
            alt="#"
          />
        </div>
      ))}
    </Fragment>
  );
};

export default DynamicImage;
