import { Card, Col, Row } from "reactstrap";
import { H6, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { LearningCardsDetails } from "../../../../Constant";
import { mainLearningCardsDatas } from "../../../../Data/apps/Learning";

const MainLearningCards = () => {
  return (
    <>
      {mainLearningCardsDatas.map((data, index) => (
        <Col xl="12" key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm="5">
                <Image className="img-fluid sm-100-w" src={dynamicImage(`faq/${index + 1}.jpg`)} alt="blog-image"/>
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date digits"><span>{data.dateSpan}</span> {data.date}</div>
                  <H6>{data.language}</H6>
                  <div className="blog-bottom-content">
                    <UL className="blog-social simple-list flex-row">
                      <LI>by: {data.learningCardBy}</LI>
                      <LI className="digits">{data.hits} Hits</LI>
                    </UL>
                    <hr />
                    <P className="mt-0">{LearningCardsDetails}</P>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MainLearningCards;
