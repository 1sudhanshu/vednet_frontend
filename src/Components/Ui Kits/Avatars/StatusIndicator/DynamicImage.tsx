import { imageclass2 } from "../../../../Data/Components/UiKits/Avatars";
import { Image } from "../../../../AbstractElements";

const DynamicImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <>
      {imageclass2.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            body={true}
            className={data.className}
            src={dynamicImage("1.jpg")}
            alt="#"
          />
          <div className={data.statuClass}></div>
        </div>
      ))}
    </>
  );
};

export default DynamicImage;
