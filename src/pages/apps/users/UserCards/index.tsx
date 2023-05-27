import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import UserCardsContainer from '../../../../Components/apps/users/UserCards/index';

const UserCards = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Users" title="UserCards" />
      <UserCardsContainer/>
    </div>
  );
};

export default UserCards;
