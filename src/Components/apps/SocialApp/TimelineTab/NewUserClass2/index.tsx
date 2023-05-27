import NewUsersSocial from "../NewUserClass/NewUsersSocial";
import { Card, CardBody, Col } from "reactstrap";
import { dynamicImage } from "../../../../../Service/index";
import { Image, P } from "../../../../../AbstractElements";
import LikeContent from "../../../../DashBoard/SocialDashboard/Elana/LikeContent";
import { Href, MoreCommnets, TimelineParagraph } from "../../../../../Constant";
import JasonBorneMessage from "../NewUserClass/JasonBorneMessage";
import IssaBellMessage from "../NewUserClass/IssaBellMessage";
import CommentsBox from "../NewUserClass/CommentsBox";

const NewUserClass2 = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial />
          <Image className="img-fluid" alt="user" src={dynamicImage("social-app/timeline-2.png")}/>
          <div className="timeline-content">
            <P>{TimelineParagraph}</P>
            <LikeContent />
            <div className="social-chat">
              <JasonBorneMessage />
              <IssaBellMessage />
              <div className="text-center">
                <a href={Href}>{MoreCommnets}</a>
              </div>
            </div>
            <CommentsBox/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass2;
