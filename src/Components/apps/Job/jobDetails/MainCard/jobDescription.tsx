import { H6, P, UL, LI, Btn } from '../../../../../AbstractElements';
import  { Fragment } from 'react';
import { AgencyExperience, JobDescriptionHeading, JobDetaildec, Perks, Qualifications,  Savethisjob, share } from '../../../../../Constant';
import { AgencyExperienceData, PerksData, QualificationsData } from '../../../../../Data/apps/Jobs';

const JobDescription = () => {
  return (
    <Fragment>
      <div className='job-description'>
        <H6>{JobDescriptionHeading}</H6>
        <P className='text-start'>{JobDetaildec}</P>
      </div>
      <div className='job-description'>
        <H6>{Qualifications}</H6>
        <UL className='simple-list'>
          {QualificationsData.map((data,index)=>(<LI key={index}>{data}</LI>))}          
        </UL>
      </div>
      <div className='job-description'>
        <H6>{AgencyExperience}</H6>
        <UL className='simple-list'>
          {AgencyExperienceData.map((data,index)=><LI key={index}>{data}</LI>)}
        </UL>
      </div>
      <div className='job-description'>
        <H6>{Perks}</H6>
        <UL className='simple-list'>
          {PerksData.map((data,index)=><LI key={index}>{data}</LI>)}
        </UL>
      </div>
      <div className='job-description'>
        <Btn color='primary' className='mx-1'><span><i className='fa fa-check'></i></span>{Savethisjob}</Btn>
        <Btn color='primary'><span><i className='fa fa-share-alt'></i></span>&nbsp;{share}</Btn>
      </div>
    </Fragment>
  );
};

export default JobDescription;
