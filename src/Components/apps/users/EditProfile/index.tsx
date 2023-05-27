import { Container, Row } from "reactstrap";
import EditMyProfile from "./EditMyProfile";
import EditprofileForm from "./EditprofileForm";
import AddProjectsAndUpload from "./AddProjectsAndUpload";

const EditProfileContainer = () => {
  return (
    <Container fluid>
      <div className="edit-profile">
        <Row>
          <EditMyProfile />
          <EditprofileForm />
          <AddProjectsAndUpload />
        </Row>
      </div>
    </Container>
  );
};

export default EditProfileContainer;
