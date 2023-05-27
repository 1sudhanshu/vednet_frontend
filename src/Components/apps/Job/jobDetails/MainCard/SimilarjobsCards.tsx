import { Card, CardBody, Col, Row } from "reactstrap";
 import { jobData } from "../../../../../Data/apps/Job";
import { H6, Image, P } from "../../../../../AbstractElements";
import { Link } from "react-router-dom";
import { dynamicImage } from "../../../../../Service";
import { Rating } from "react-simple-star-rating";
interface SimilarjobsCardsType {
  limit: number;
  jobClass: string;
  ribbion: boolean;
  col12: boolean;
}

const SimilarjobsCards = ({limit,jobClass,ribbion,col12,}: SimilarjobsCardsType) => {
  return (
    <Row>
      {jobData.slice(0, 5).map((item) => (
        <Col
          className={`col-auto ${limit === item.Id && col12? "col-xl-12 xl-100 box-col-12": jobClass}`} key={item.Id}>
          <Card className={`${item.ribbion && ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
            {item.ribbion ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbion && "d-none"}`}>
                <i className="icofont icofont-love"></i>
              </div>
            ) : (
              ""
            )}
            <div className="job-search">
              <CardBody>
                <div className="d-flex ">
                  <Image className="img-40 img-fluid m-r-20" src={dynamicImage(item.logo)} alt=""/>
                  <div className="flex-grow-1">
                    <H6>
                      <Link to={`${process.env.PUBLIC_URL}/apps/job/job-details`}>{item.job_name}</Link>
                      {item.type === "new" ? (<span className="badge badge-primary pull-right">{item.badgeValue}</span>) : 
                      (<span className="pull-right">{item.type}</span>)}
                    </H6>
                    <P>
                      {item.job_area}, {item.job_city}
                      <Rating className="rating ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={14}/>
                    </P>
                  </div>
                </div>
                <P>{item.Job_description}</P>
              </CardBody>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SimilarjobsCards;
