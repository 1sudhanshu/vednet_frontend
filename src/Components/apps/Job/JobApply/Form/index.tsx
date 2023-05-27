import {UIDesigner,Submit,Cancel, XoloEndless, Savethisjob, Href, PersonalDetails, YourEducation, YourExperience, UploadYourFiles,} from "../../../../../Constant";
import { Btn, P, Image,  H6 } from "../../../../../AbstractElements";
import PersonalDetail from "./PersonalDetail";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import UploadFileClass from "./UploadFile";
import { Card, CardBody, CardFooter } from "reactstrap";
import { dynamicImage } from "../../../../../Service";
import { Rating } from "react-simple-star-rating";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex ">
            <Image className="img-40 img-fluid  m-r-20" src={dynamicImage("job-search/1.jpg")} alt=""/>
            <div className="flex-grow-1">
              <H6 className="f-w-600">
                <a href={Href}>{UIDesigner}</a>
                <span className="pull-right">
                  <Btn color="primary"><span><i className="fa fa-check text-white" /></span>{Savethisjob}</Btn>
                </span>
              </H6>
              <P>{XoloEndless} <Rating className="rating ms-1" initialValue={Math.random()*5} size={15} /></P>
            </div>
          </div>
          <div className="job-description">
            <H6 className="mb-0">{PersonalDetails}</H6>
            <PersonalDetail />
            <H6 className='mb-0'>{YourEducation}</H6>
            <EducationClass />
            <H6  className= 'mb-0' >{YourExperience}</H6>
            <ExperienceClass />
            <H6 className='mb-0'>{UploadYourFiles}</H6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Btn color="primary mx-1">{Submit}</Btn>
          <Btn color="light">{Cancel}</Btn>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
