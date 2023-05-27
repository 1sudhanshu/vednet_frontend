import { Image } from "../../../../AbstractElements";

const StaticImage = () => {
    const images = require.context("../../../../assets/images/user", true);
    const dynamicImage = (image: string) => {
      return images(`./${image}`);
    };
  return (
    <div className="avatar ratio">
      <Image className="b-r-8 height-100" src={dynamicImage("1.jpg")} alt="#" />
    </div>
  );
};

export default StaticImage;
