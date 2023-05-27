import { Col, Card } from "reactstrap";
import ProjectDetails from "./ProjectDetails";

const SocialProfile = () => {
  return (
    <Col sm="12" className=" box-col-12">
      <Card className=" card-with-border">
        <ProjectDetails />
      </Card>
    </Col>
  );
};

export default SocialProfile;
