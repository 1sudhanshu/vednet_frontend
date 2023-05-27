import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import KnowledgebaseContainer from '../../../Components/apps/Knowledgebase/index';
const Knowledgebase = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Apps" title="Knowledgebase" />
      <KnowledgebaseContainer />
    </div>
  );
};

export default Knowledgebase;
