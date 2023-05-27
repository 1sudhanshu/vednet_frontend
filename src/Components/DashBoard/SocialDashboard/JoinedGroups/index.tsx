import { Card, Col } from "reactstrap";
import JoinedGroupsHeader from "./JoinedGroupsHeader";
import JoinedGroupsBody from "./JoinedGroupsBody";

const JoinedGroups = () => {
  return (
    <Col xl="5" className="xl-50 box-col-6">
      <Card className=" card-with-border">
        <JoinedGroupsHeader />
        <JoinedGroupsBody />
      </Card>
    </Col>
  );
};

export default JoinedGroups;
