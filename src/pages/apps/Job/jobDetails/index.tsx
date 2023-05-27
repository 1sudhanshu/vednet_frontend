import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import JobDetailsContainer from '../../../../Components/apps/Job/jobDetails/index';

const JobDetails = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Job Search" title="job Details" />
      <JobDetailsContainer />
    </div>
  );
};

export default JobDetails;
