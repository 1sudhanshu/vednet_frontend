import { Col, Row } from "reactstrap";
import CourseCategories from "./CourseCategories";
import CategoriesCheckBoxes from "./Categories";
import UpcomingCourses from "./UpcomingCourses";

const CourseFilter = () => {
  return (
    <Col xl="3" className="xl-40">
      <div className="default-according style-1 faq-accordion job-accordion">
        <Row>
          <CourseCategories />
          <CategoriesCheckBoxes />
          <UpcomingCourses />
        </Row>
      </div>
    </Col>
  );
};

export default CourseFilter;
