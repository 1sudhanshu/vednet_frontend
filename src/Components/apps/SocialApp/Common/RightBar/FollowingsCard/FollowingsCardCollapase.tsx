import React from "react";
import { CardBody, Collapse } from "reactstrap";
import { FollowingsData } from "../../../../../../Data/apps/SocialApp";
import { Image } from "../../../../../../AbstractElements";
import { AddFriend, Href } from "../../../../../../Constant";
import { dynamicImage } from "../../../../../../Service";
interface propsType {
  isFilter: boolean;
}
const FollowingsCardCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {FollowingsData.map((data, index) => (
          <div className="d-flex" key={index}>
            <Image
              className="img-50 img-fluid m-r-20 rounded-circle"
              alt="image"
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

export default FollowingsCardCollapse;
