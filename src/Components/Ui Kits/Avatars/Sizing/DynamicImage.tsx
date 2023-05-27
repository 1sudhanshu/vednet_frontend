import { Image } from "../../../../AbstractElements";
import { Imageclass1 } from "../../../../Data/Components/UiKits/Avatars";

const DynamicImage = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div>
      <Image
        body={true}
        className="img-100 rounded-circle"
        src={dynamicImage("1.jpg")}
        alt="#"
      />
      {Imageclass1.map((data, index) => (
        <div key={index} className="avatar">
          <Image
            body={true}
            className={data.className}
            src={dynamicImage("1.jpg")}
            alt="#"
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicImage;
