import { CardBody, Collapse } from "reactstrap";
import { dynamicImage } from "../../../../../../Service";
import { Image, LI, UL } from "../../../../../../AbstractElements";
interface propsType {
  isFilter: boolean;
}
const LatestPhotosCollapse = ({ isFilter }: propsType) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="photos filter-cards-view">
        <UL className="text-center ">
          {numbers.map((data, index) => (
            <LI key={index}>
              <div className="latest-post">
                <Image
                  className="img-fluid"
                  alt="user"
                  src={dynamicImage(`social-app/post-${data}.png`)}
                />
              </div>
            </LI>
          ))}
        </UL>
      </CardBody>
    </Collapse>
  );
};

export default LatestPhotosCollapse;
