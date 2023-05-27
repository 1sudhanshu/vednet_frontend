import { Col, Row } from "reactstrap";
import { H2, P } from "../../../../AbstractElements";
import { projectOverViewDatas } from "../../../../Data/DashBoard/Enterprise/project-overview";

const ProjectOverviewHeading = () => {
  return (
    <Col xs="12">
      <div className="project-overview">
        <Row>
          {projectOverViewDatas.map((data, index) => (
            <Col key={index} xl="2" className="col-xl-2 col-sm-4 col-6">
              <H2 className={`f-w-600 counter ${data.headingClassName}`}>
                {data.heading}
              </H2>
              <P className="mb-0">{data.paragraph}</P>
            </Col>
          ))}
        </Row>
      </div>
    </Col>
  );
};

export default ProjectOverviewHeading;
