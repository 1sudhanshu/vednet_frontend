import { Card, CardBody, Col, Table } from "reactstrap";
import ProjectStatusHeader from "./ProjectStatusHeader";
import ProjectStatusTableBody from "./ProjectStatusTableBody";
import ProjectStatusTableHead from "./ProjectStatusTableHead";
const ProjectStatus = () => {
  return (
    <Col xl="9" className=" xl-60 box-col-6">
      <Card className=" card-with-border project-card">
        <ProjectStatusHeader />
        <CardBody className=" p-0">
          <div className="table-responsive project-tables theme-scrollbar">
            <Table className=" table-bordernone">
              <ProjectStatusTableHead />
              <ProjectStatusTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProjectStatus;
