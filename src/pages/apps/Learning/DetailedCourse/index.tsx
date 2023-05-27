import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import DetailedCourseContainer from "../../../../Components/apps/Learning/DetailedCourse";

const DetailedCourse = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Learning" title="DetailedCourse" />
      <DetailedCourseContainer />
    </div>
  );
};

export default DetailedCourse;
