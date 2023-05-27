import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import EmailAppContainer from '../../../../Components/apps/email/EmailApp/index';

const EmailApp = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Email" title="EmailApp" />
      <EmailAppContainer />
    </div>
  );
};

export default EmailApp;
