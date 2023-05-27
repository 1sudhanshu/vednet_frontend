import { Card, CardBody, Col } from "reactstrap";
import {  H4, Image, P } from "../../../../AbstractElements";
import {JasonBorneHeading,UIUXDesigner,paragraph} from "../../../../Constant";
import UserCardFooter from "./UserCardFooter";
import SocialGroup from "./SocialGroup";
import Badges from "./Badges";
import OptionSocial from "./OptionSocial";
import { Link } from "react-router-dom";
interface propsTypes {
  tittle: string;
  imageLink: string;
}

const UserCard = (props: propsTypes) => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Col xl="4" className="xl-50 box-col-6">
      <Card className="social-user-card card-with-border">
        <CardBody className=" socialprofile">
          <div className="social-user-top-content text-center">
            <Image
              body={true}
              className="img-fluid rounded-circle img-social"
              src={dynamicImage(props.imageLink)}
              alt={JasonBorneHeading}
            />
            <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><H4>{props.tittle}</H4></Link>
            <span className="f-12">{UIUXDesigner}</span>
            <Badges />
            <OptionSocial />
            <P className="mb-0">{paragraph}</P>
            <SocialGroup />
          </div>
        </CardBody>
        <UserCardFooter />
      </Card>
    </Col>
  );
};
export default UserCard;