import UserInfo from "./UserInfo";
import SocialMediaRow from "./SocialMediaRow";
import Follow from "./Follow";

const Info = () => {
  return (
    <div className="info">
      <UserInfo />
      <hr />
      <SocialMediaRow />
      <Follow />
      
    </div>
  );
};

export default Info;
