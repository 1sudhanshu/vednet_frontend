import ScrollBar from "react-perfect-scrollbar";
import { CardBody } from "reactstrap";
import { Image } from "../../../../AbstractElements";

const NoScrollbarCardBody = () => {
  const images = require.context("../../../../assets/images/banner", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <CardBody>
      <ScrollBar className="vertical-scroll" options={{ suppressScrollX: true, suppressScrollY: true }}>
        <div><Image src={dynamicImage("1.jpg")} alt="" height={600} /></div>
      </ScrollBar>
    </CardBody>
  );
};

export default NoScrollbarCardBody;