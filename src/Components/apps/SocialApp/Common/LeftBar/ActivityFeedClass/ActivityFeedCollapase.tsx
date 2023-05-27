import { Collapse, CardBody } from "reactstrap";
import { Image, P } from "../../../../../../AbstractElements";
import { Ago, CommentedOn, Href, Photo } from "../../../../../../Constant";
import { FriendsData } from "../../../../../../Data/apps/SocialApp";
import { dynamicImage } from "../../../../../../Service";
interface propsType {
  isFilter: boolean;
}
const ActivityFeedCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {FriendsData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user"/>
            <div className="flex-grow-1">
              <span className="f-w-600 d-block">{data.title}</span>
              <P>{CommentedOn} Shaun Park's <a href={Href}>{Photo}</a></P>
              <span className="light-span">{data.time} {Ago}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default ActivityFeedCollapse;
