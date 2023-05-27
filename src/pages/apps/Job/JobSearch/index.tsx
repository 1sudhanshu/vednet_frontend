import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import JobSearchContainer from "../../../../Components/apps/Job/JobSearch";

const JobSearch = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="JobSearch" />
      <JobSearchContainer />
    </div>
  );
};

export default JobSearch;
