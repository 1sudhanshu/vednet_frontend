import { CardBody } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const BothSideScrollCardBody = () => {
  
  return (
    <CardBody>
      <ScrollBar className=" vertical-scroll both-side-scroll" style={{ width: '100%', height: 300 }}>
        <Image src={dynamicImage("banner/1.jpg")} alt="banner" height={600} />
      </ScrollBar>
    </CardBody>
  );
};

export default BothSideScrollCardBody;
