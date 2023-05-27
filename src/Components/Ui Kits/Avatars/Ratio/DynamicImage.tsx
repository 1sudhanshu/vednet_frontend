import { imageData5 } from "../../../../Data/Components/UiKits/Avatars";
import { Image } from "../../../../AbstractElements";

const DynamicImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <>
      {imageData5.map((data, index) => (
        <div key={index} className="avatar ratio">
          <Image
            className={data.className}
            src={dynamicImage("1.jpg")}
            alt="#"
          />
        </div>
      ))}
    </>
  );
};

export default DynamicImage;
