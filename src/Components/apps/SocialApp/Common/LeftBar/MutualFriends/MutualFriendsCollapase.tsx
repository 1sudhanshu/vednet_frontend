import { CardBody, Collapse, FormGroup, Input } from "reactstrap";
import { mutualFriendData } from "../../../../../../Data/apps/SocialApp";
import { Image } from "../../../../../../AbstractElements";
import { dynamicImage } from "../../../../../../Service";
interface propsType {
  isFilter: boolean;
}
const MutualFriendsCollapase = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        <form>
          <FormGroup className=" m-0 form-group">
            <Input
              className="form-control-social"
              type="search"
              placeholder="Search Contacts.."
            />
          </FormGroup>
        </form>
        {mutualFriendData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image
              className="img-50 rounded-circle m-r-15"
              src={dynamicImage(`user/${data.imageName}`)}
              alt=""
            />
            <div className={`social-status ${data.socialClass}`} />
            <div className="flex-grow-1">
              <span className="f-w-600 d-block">{data.title}</span>
              <span className="d-block">{data.email}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default MutualFriendsCollapase;
