import { Link } from "react-router-dom";
import { LI, UL } from "../../../AbstractElements";

const UserProfileIcon = () => {
  return (
    <UL className="share-icons flex-row">
      <LI>
        <Link className="social-icon bg-primary" to={`${process.env.PUBLIC_URL}/user/user-profile`}>
          <i className="fa fa-smile-o me-0" />
        </Link>
      </LI>
      <LI>
        <Link className="social-icon bg-secondary" to={`${process.env.PUBLIC_URL}/user/user-profile`}>
          <i className="fa fa-wechat me-0" />
        </Link>
      </LI>
      <LI>
        <Link className="social-icon bg-warning" to={`${process.env.PUBLIC_URL}/user/user-profile`}>
          <i className="fa fa-share-alt me-0" />
        </Link>
      </LI>
    </UL>
  );
};

export default UserProfileIcon;
