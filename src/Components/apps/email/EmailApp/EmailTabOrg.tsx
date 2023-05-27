import { Card, TabPane, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import { H5, H6, Image, P } from "../../../../AbstractElements";
import { emailList } from "../../../../Data/apps/email/index";
import { Fragment } from 'react';
import { DearSirGoodMorning, DownloadAll, Elementumvarius,  Hello,  Lorem, Lorem2 } from "../../../../Constant";
import Attachment from "./Attachment";
const EmailTabOrg = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {emailList.map((data, index) => (
        <TabPane tabId={index+1} key={index}> 
          <div className="email-right-aside">
            <Card className="email-body radius-left">
              <div className="email-content">
                <div className="email-top">
                  <Row>
                    <Col md="6" sm="12" className="xl-100">
                      <div className="d-flex">
                        <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="image"/>
                        <div className="flex-grow-1">
                          <H6>{data.tittle}&nbsp;&nbsp;<small>
                            <span className="digits email-badge">{data.date}&nbsp;</span>{data.month}&nbsp;&nbsp;<span className="digits email-badge">
                              6:00&nbsp;</span>AM</small></H6>
                          <P>{data.paragraph}</P>
                        </div>
                      </div>
                    </Col>
                    <Col md="6" sm="12">
                      <div className="float-end d-flex">
                        <P className="user-emailid">{data.tittle.replaceAll(' ', '') }<span className="digits email-badge">23</span>@company.com</P>
                        <i className="fa fa-star-o f-18 mt-1" />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="email-wrapper">
                  <P>{Hello}</P>
                  <P>{DearSirGoodMorning}</P>
                  <H5>{Elementumvarius}</H5>
                  <P className="m-b-20">{Lorem}</P>
                  <P>{Lorem2}</P>
                  <hr/>
                  <div className="d-inline-block">
                    <H6 className="text-muted"><i className="icofont icofont-clip" /> ATTACHMENTS</H6><a className="text-muted text-end right-download" href="#javascript"><i className="fa fa-long-arrow-down me-2" />{DownloadAll}</a>
                    <div className="clearfix" />
                  </div>
                  <Attachment dynamicImage={dynamicImage}/>
                </div>
              </div>
            </Card>
          </div>
        </TabPane>
      ))}
    </Fragment>
  );
};
export default EmailTabOrg;