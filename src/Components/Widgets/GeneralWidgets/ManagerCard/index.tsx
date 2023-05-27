import { Card, Col } from "reactstrap";
import CardTop from "./CardTop";
import SocialCard from "./SocialCard";
import ManagerCardFooter from "./CardFooter";
import { H4, H6 } from "../../../../AbstractElements";
import { Manager, ScarlettJohn } from "../../../../Constant";
import { Link } from "react-router-dom";
const ManagerCard = () => {
  return (
    <Col xl="4" className=" box-col-6">
      <Card className=" custom-card">
        <CardTop />
        <SocialCard />
        <div className="text-center profile-details">
          <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><H4>{ScarlettJohn}</H4></Link>
          <H6>{Manager}</H6>
        </div>
        <ManagerCardFooter />
      </Card>
    </Col>
  );
};

export default ManagerCard;
