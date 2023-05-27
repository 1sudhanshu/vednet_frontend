import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ContactsContainer from '../../../Components/apps/Contacts/index';
const Contacts = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Contacts" />
      <ContactsContainer/>
    </div>
  );
};

export default Contacts;
