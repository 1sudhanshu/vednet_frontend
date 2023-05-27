import { useCallback, useState } from "react";
import { Container, Row, TabContent, TabPane } from "reactstrap";
import UserProfile from "./UserProfile";
import TimelineTab from "./TimelineTab";
import AboutTab from "./AboutTab";
import AllCards from "./AllCards";
import PhotosTab from "./PhotosTab";

const SocialAppContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <Container fluid>
      <div className="user-profile social-app-profile">
        <UserProfile callback={callback} />
        <TabContent activeTab={activeTab} className="tab-content">
          <TabPane tabId={1}>
            <TimelineTab />
          </TabPane>
          <TabPane tabId={2}>
            <AboutTab />
          </TabPane>
          <TabPane tabId={3}>
            <Row>
              <AllCards />
            </Row>
          </TabPane>
          <TabPane tabId={4}>
            <Row>
              <PhotosTab />
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

export default SocialAppContainer;
