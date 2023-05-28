import { Col, Row } from "reactstrap";
import ProjectOverviewHeading from "./ProjectOverviewHeading";
import TaskCompletionLevel from "./TaskCompletionLevel";
import Tasks from "./Tasks";
import MonthlySale from "../MonthlySale";

const ProjectOverview = () => {
  return (
    <Col xl="9" className=" xl-100 box-col-12">
      <Row>
        <ProjectOverviewHeading />
        <TaskCompletionLevel />
        <MonthlySale/>
      </Row>
    </Col>
  );
};

export default ProjectOverview;
