import  {  useEffect, useState } from 'react';
import { H6, LI, P, UL } from '../../../../AbstractElements';
import { Col,  Row } from 'reactstrap';
import { AllAbout, Href } from '../../../../Constant';
import PagesSort from './Pages';
import axios from 'axios';
import { searchData } from './SearchWebsiteType';

const VideoTabs = () => {
  const [tabsDatas, setTabsDatas] = useState<searchData[] | []>([]);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
      setTabsDatas(resp.data);
    });
  }, []);
  return (
      <Row>
        <Col xl="6" className="xl-70 box-col-8a"  lg='8'>
          <P className='pb-4'>{AllAbout}</P>
          {tabsDatas.map((item) =>  (
                <div className='d-flex info-block' key={item.id}>
                  <iframe className='me-3 mb-3' title='1' width='200' height='100' src={item.videoLink}></iframe>
                  <div className='flex-grow-1'>
                    <H6>{item.title}</H6>
                    <a href={Href}>{item.url}</a>
                    <P>{item.detail}</P>
                    <div className='star-ratings'>
                      <UL className='simple-list search-info d-flex flex-row'>
                        <LI>{item.star}</LI>
                        <LI>{item.vote}</LI>
                        <LI>{item.news}</LI>
                      </UL>
                    </div>
                  </div>
                </div>
              )
            )}
          <PagesSort />
        </Col>
        <Col xl='6' className='xl-30 box-col-4 lg-mt' lg='4'>
          <Row className='search-vid-block'>
            <Col xl='12' className='xl-100 box-col-12'>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe className='w-100' title='1' height='315' src='https://www.youtube.com/embed/wpmHZspl4EM' allowFullScreen></iframe>
              </div>
            </Col>
            <Col xl="12" className='xl-100 box-col-12'>
              <div className='embed-responsive embed-responsive-21by9'>
                <iframe className='w-100' title='1' height='315' src='https://www.youtube.com/embed/I0-vBdh4sZ8' allowFullScreen></iframe>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
  );
};
export default VideoTabs;
