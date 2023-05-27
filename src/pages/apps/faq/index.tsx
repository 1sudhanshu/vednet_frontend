import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import FaqContainer from '../../../Components/apps/faq/index';
const Faq = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="faq" />
      <FaqContainer />
    </div>
  );
};

export default Faq;
