import { Col, Row } from "reactstrap";
import { SocialProfileData } from "../../../../Data/DashBoard/Social Dashboard/SocialProfile";
import { H5, P } from "../../../../AbstractElements";

const ProjectDetails = () => {
  return (
    <Row className=" project-details m-0 social-row py-4">
      {SocialProfileData.map((data, index) => (
        <Col key={index} xl="2" sm="4" className="xl-4">
          <div className="project-incomes text-center">
            {data.fontClass}
            <H5 className="mb-0">{data.tittle}</H5>
            <P className="mb-0">{data.increase}% increase</P>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectDetails;
