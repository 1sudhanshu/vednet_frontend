import { Fragment } from "react";
import { imageData4 } from "../../../../Data/Components/UiKits/Avatars";
import { Image } from "../../../../AbstractElements";

const DynamicImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {imageData4.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            body={true}
            className={data.className}
            src={dynamicImage("1.jpg")}
            alt="#"
          />
        </div>
      ))}
    </Fragment>
  );
};

export default DynamicImage;
