import { Col, Card } from "reactstrap";
import UserImage from "./UserImage";
import UserLikeComment from "./UserLikeComment";

const ThirdSocial = () => {
  return (
    <>
      <Col sm="12">
        <Card>
          <div className="profile-img-style">
            <UserImage />
            <UserLikeComment />
          </div>
        </Card>
      </Col>
    </>
  );
};

export default ThirdSocial;
