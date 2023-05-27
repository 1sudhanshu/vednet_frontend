import { P, Btn, Image, H5, H6 } from "../../../../../AbstractElements";
import { Card, CardBody, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import JobDescription from "./jobDescription";
import { dynamicImage } from "../../../../../Service";
import { ApplyForThisJob, Href, SimilarJobs, XoloUnitedStates } from "../../../../../Constant";
import { Rating } from "react-simple-star-rating";
import SimilarjobsCards from "./SimilarjobsCards";

const MainCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="job-search">
          <CardBody>
            <div className="d-flex">
              <Image className="img-40 img-fluid  m-r-20" src={dynamicImage("job-search/1.jpg")} alt="job-search"/>
              <div className="flex-grow-1">
                <H6 className="f-w-600">
                  <a href={Href}>Product Designer (UI/UX Designer)</a>
                  <span className="pull-right">
                    <Btn color="primary" onClick={() =>navigate(`${process.env.PUBLIC_URL}/apps/job/apply`)}>
                      {ApplyForThisJob}
                    </Btn>
                  </span>
                </H6>
                <P>{XoloUnitedStates}
                  <Rating className="rating ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={14}/>
                </P>
              </div>
            </div>
            <JobDescription />
          </CardBody>
        </div>
      </Card>
      <div className="header-faq">
        <H5 className="mb-0 f-w-600">{SimilarJobs}</H5>
      </div>
      <Row>
        <SimilarjobsCards  limit={5} jobClass={'col-xl-6 xl-100 box-col-12'} ribbion={false} col12={true}/> 
      </Row>
    </>
  );
};

export default MainCard;
