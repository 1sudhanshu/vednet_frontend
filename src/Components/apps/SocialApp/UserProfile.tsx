import { Card, Col, Row } from "reactstrap";
import { dynamicImage } from "../../../Service/index";
import { Image } from "../../../AbstractElements";
import NavBarMain from "./NavBarMain";
import UserProfileIcon from "./UserProfileIcon";
import { Link } from "react-router-dom";
export interface propsType {
  callback: (tab: number) => void;
}

const UserProfile = ({ callback }: propsType) => {
  return (
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image alt="user" src={dynamicImage("user/1.jpg")} />
            </div>
            <div className="icon-wrapper">
              <Link to={`${process.env.PUBLIC_URL}/user/user-edit`}>
                <i className="icofont icofont-pencil-alt-5" />
              </Link>
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
