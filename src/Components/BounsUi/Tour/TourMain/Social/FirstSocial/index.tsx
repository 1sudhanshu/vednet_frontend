import { Col, Card } from "reactstrap";
import Userone from "./Userone";
import LikeComment from "./likeComment";

const FirstSocial = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style step6">
          <Userone />
          <LikeComment />
        </div>
      </Card>
    </Col>
  );
};

export default FirstSocial;
