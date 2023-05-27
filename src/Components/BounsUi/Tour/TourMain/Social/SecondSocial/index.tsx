import { Col, Card } from "reactstrap";
import SecondUserImg from "./SecondUserImg";
import Pictures from "./pictures";
import SecondLike from "./SecondLike";

const SecondSocial = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <SecondUserImg />
          <Pictures />
          <SecondLike />
        </div>
      </Card>
    </Col>
  );
};

export default SecondSocial;
