import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import EditProfileContainer from '../../../../Components/apps/users/EditProfile/index';

const EditProfile = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Users" title="EditProfile" />
      <EditProfileContainer />
    </div>
  );
};

export default EditProfile;
