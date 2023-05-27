import { Col, Row } from "reactstrap";
import { H5, Image, P } from "../../../../../../AbstractElements";
import {Fax,Follower,Following,MARKJENCO,MARKJENCOEMAIL,} from "../../../../../../Constant";
import { dynamicImage } from "../../../../../../Service";
import SocialMediaIcon from "../../../../../../Common/SocialMediaIcon";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="image">
        <div className="avatar text-center">
          <Image alt="user" src={dynamicImage("user/2.png")} />
        </div>
        <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5" /></div>
      </div>
      <div className="user-content text-center">
        <H5>{MARKJENCO}</H5>
        <div className="social-media"><SocialMediaIcon /></div>
        <hr />
        <div className="follow text-center">
          <Row>
            <Col className="border-right"><span>{Following}</span><div className="follow-num">236k</div></Col>
            <Col><span>{Follower}</span><div className="follow-num">3691k</div></Col>
          </Row>
        </div>
        <hr />
        <div className="text-center digits">
          <P className="mb-0">{MARKJENCOEMAIL}</P>
          <P className="mb-0">+91 365 - 658 - 1236</P>
          <P className="mb-0">{Fax}: 123-4560 </P>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
