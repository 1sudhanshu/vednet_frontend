import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SocialAppContainer from "../../../Components/apps/SocialApp/index";
const SocialApp = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Social App" />
      <SocialAppContainer />
    </div>
  );
};

export default SocialApp;
