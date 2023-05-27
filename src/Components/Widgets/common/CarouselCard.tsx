import { H5, Image, P } from "../../../AbstractElements";
import { carouselParagraph } from "../../../Constant";
interface propstypes {
  heading: number;
}
const CarouselCard = (props: propstypes) => {
  const images = require.context("../../../assets/images/dashboard", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <div className="item">
      <i className="icon-quote-left" />
      <P>{carouselParagraph}</P>
      <Image className="img-80" src={dynamicImage("boy-2.png")} alt="" />
      <H5 className="font-primary">Poio klot</H5>
      <span>Developer{props.heading}</span>
    </div>
  );
};

export default CarouselCard;
