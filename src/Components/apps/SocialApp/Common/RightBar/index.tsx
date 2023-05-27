import { Card, Col } from "reactstrap";
import ProfileIntroCard from "./ProfileIntroCard";
import FollowerCard from "./FollowerCard";
import FollowingsCard from "./FollowingsCard";
import LatestPhotos from "./LatestPhotos.";
import FriendsCard from "./FriendsCard";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";

const RightBar = () => {
  return (
    <>
      <Col xl="12" className="xl-50 box-col-6">
        <ProfileIntroCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowerCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowingsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <LatestPhotos />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FriendsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <Card>
          <Image
            className="img-fluid"
            src={dynamicImage("social-app/timeline-4.png")}
            alt="timeline"
          />
        </Card>
      </Col>
    </>
  );
};

export default RightBar;
