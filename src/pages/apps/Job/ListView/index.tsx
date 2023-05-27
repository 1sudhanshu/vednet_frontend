import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import JobListViewContainer from "../../../../Components/apps/Job/ListView";

const ListView = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Job Search" title="ListView" />
      <JobListViewContainer />
    </div>
  );
};

export default ListView;
