import { Col, Card, CardHeader } from "reactstrap";
import Userprofile from "./Userprofile";
import Info from "./Info";

const UserProfileFirst = () => {
  return (
    <Col sm="12">
      <Card className=" hovercard text-center">
        <CardHeader className="cardheader"></CardHeader>
        <Userprofile />
        <Info />
      </Card>
    </Col>
  );
};

export default UserProfileFirst;
