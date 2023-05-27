import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import JobApplyContainer from "../../../../Components/apps/Job/JobApply";

const JobApply = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Job Search" title="Job Apply" />
      <JobApplyContainer />
    </div>
  );
};

export default JobApply;
