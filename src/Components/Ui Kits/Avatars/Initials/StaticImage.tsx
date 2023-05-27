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
        className="img-100 rounded-circle"
        src={dynamicImage("16.png")}
        alt="#"
      />
    </div>
  );
};

export default StaticImage;
