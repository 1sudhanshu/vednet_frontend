import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import UserProfileContainer from "../../../../Components/apps/users/UserProfile/index";

const UserProfile = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="User" title="UserProfile" />
      <UserProfileContainer />
    </div>
  );
};

export default UserProfile;
