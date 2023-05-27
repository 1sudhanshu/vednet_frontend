import { H6, Image, P } from "../../../../AbstractElements";
import { Fragment } from "react";
import { Card,  CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { jobData } from "../../../../Data/apps/Job";
import { dynamicImage } from "../../../../Service";
import { Rating } from "react-simple-star-rating";

const ListViewCard = () => {
  return (
    <Fragment>
      {jobData &&
        jobData.slice(0, 8).map((item) => (
          <Card key={item.Id} className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
            {item.ribbion ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none"}`}>
                <i className="icofont icofont-love"></i>
              </div>
            ) : (
              ""
            )}
            <div className="job-search">
              <CardBody>
                <div className="d-flex">
                  <Image className="img-40 img-fluid m-r-20" src={dynamicImage(item.logo)} alt="job logo"/>
                  <div className="flex-grow-1">
                    <H6>
                      <Link to={`${process.env.PUBLIC_URL}/apps/job/job-details`}>{item.job_name}</Link>
                      {item.type === "new" ? (
                        <span className="badge badge-primary pull-right">{item.badgeValue}</span>
                      ) : (
                        <span className="pull-right">{item.type}</span>
                      )}
                    </H6>
                    <P>
                      {item.job_area}, {item.job_city}
                      <Rating className="rating ms-1" initialValue={Math.random()*5} size={14} />
                    </P>
                  </div>
                </div>
                <P>{item.Job_description}</P>
              </CardBody>
            </div>
          </Card>
        ))}
    </Fragment>
  );
};
export default ListViewCard;
