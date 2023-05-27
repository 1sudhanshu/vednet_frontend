import { Col, Row } from "reactstrap";
import LeftBar from "../Common/LeftBar";
import RightBar from "../Common/RightBar";
import PepoleYouMayKnow from "./PepoleYouMayKnow";
import HobbiesAndInterests from "./HobbiesAndInterests";
import { PepoleKnow, ViewedYourProfile } from "../../../../Constant";
import EducationAndEmployement from "./EducationAndEmployement";
import ActivityLog from "./ActivityLog";

const AboutTab = () => {
  return (
    <Row>
      <Col xl="3 xl-40 box-col-4" lg="12" md="5">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col xl="6 xl-60 box-col-8a" lg="12" md="7">
        <Row>
          <PepoleYouMayKnow Heading={PepoleKnow} />
          <HobbiesAndInterests />
          <EducationAndEmployement />
          <PepoleYouMayKnow Heading={ViewedYourProfile} />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl="3 xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
