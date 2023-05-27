import { Col, Card } from "reactstrap";
import Userimage from "./Userimage";
import AniimatedThumbnials from "./AniimatedThumbnials";
const FourthSocial = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <Userimage />
          <hr />
          <AniimatedThumbnials />
        </div>
      </Card>
    </Col>
  );
};

export default FourthSocial;
