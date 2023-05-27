import { CardBody, Collapse } from "reactstrap";
import { FollowersData } from "../../../../../../Data/apps/SocialApp";
import { dynamicImage } from "../../../../../../Service";
import { AddFriend, Href } from "../../../../../../Constant";
import { Image } from "../../../../../../AbstractElements";
interface propsType {
  isFilter: boolean;
}
const FollowerCardCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {FollowersData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image
              className="img-50 img-fluid m-r-20 rounded-circle"
              alt="img"
              src={dynamicImage(`user/${data.imageName}`)}
            />
            <div className="flex-grow-1">
              <span className="d-block">{data.name}</span>
              <a href={Href}>{AddFriend}</a>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default FollowerCardCollapse;
