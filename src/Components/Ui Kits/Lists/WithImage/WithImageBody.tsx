import { CardBody } from "reactstrap";
import { Image, LI, UL } from "../../../../AbstractElements";

const WithImageBody = () => {
  let datas = [
    { liText: "Dapibus ac facilisis in" },
    { liText: "Dapibus ac facilisis in" },
    { liText: "Dapibus ac facilisis in", liClass: "disabled" },
  ];
  const images = require.context("../../../../assets/images/user/", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <CardBody>
      <UL className='simple-list'>
        <LI className={`list-group-item-action`} tag="a" href="#javascript">
          <Image body={true} src={dynamicImage("1.jpg")} alt="" />
          Cras justo odio
        </LI>
        {datas.map((data, index) => (
          <LI
            key={index}
            className={`list-group-item-action ${data.liClass}`}
            tag="a"
            href="#javascript"
          >
            <Image body={true} src={dynamicImage("1.jpg")} alt="" />
            {data.liText}
          </LI>
        ))}
      </UL>
    </CardBody>
  );
};

export default WithImageBody;
