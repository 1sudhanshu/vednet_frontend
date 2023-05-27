import { Card, CardBody, Col } from "reactstrap";
import {  TimelineParagraph } from "../../../../../Constant";
import {  Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import CommentsBox from "./CommentsBox";
import SocialChat from "./SocialChat";
import NewUsersSocial from './NewUsersSocial';
import LikeContent from "../../../../DashBoard/SocialDashboard/Elana/LikeContent";

const NewUserClass = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial/>
          <Image className="img-fluid" alt="timeline" src={dynamicImage("social-app/timeline-1.png")}/>
          <div className="timeline-content">
            <P>{TimelineParagraph}</P>
            <LikeContent/>
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass;
