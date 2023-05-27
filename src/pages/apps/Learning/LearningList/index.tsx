import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import LearningListContainer from "../../../../Components/apps/Learning/LearningList";

const LearningList = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Learning" title="Learning List" />
      <LearningListContainer />
    </div>
  );
};

export default LearningList;
