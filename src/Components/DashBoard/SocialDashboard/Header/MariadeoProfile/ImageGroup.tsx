import { Image, UL } from "../../../../../AbstractElements";

const ImageGroup = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  let imagesSrc = ["3.jpg", "5.jpg", "1.jpg", "2.png", "8.jpg", "11.png"];

  return (
    <UL className="d-block">
      {imagesSrc.map((data, index) => (
        <li key={index} className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={dynamicImage(data)}
            alt=""
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-placement="top"
            title=""
            data-original-title="Johny Waston"
          />
        </li>
      ))}
    </UL>
  );
};

export default ImageGroup;
