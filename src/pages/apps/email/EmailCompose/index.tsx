import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import EmailComposeContainer from '../../../../Components/apps/email/EmailCompose/index';

const EmailCompose = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Email" title="EmailCompose" />
      <EmailComposeContainer />
    </div>
  );
};

export default EmailCompose;
