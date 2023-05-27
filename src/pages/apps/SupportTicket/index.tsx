import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SupportTicketContainer from "../../../Components/apps/SupportTicket/index";
const SupportTicket = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Support Ticket" />
      <SupportTicketContainer />
    </div>
  );
};

export default SupportTicket;
