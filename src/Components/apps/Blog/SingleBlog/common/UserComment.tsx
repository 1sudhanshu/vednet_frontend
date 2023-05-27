import { Col, Row } from "reactstrap";
import { H6, Image, LI, P, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service/index";
import { JolioMark, SingleBlogParagraph } from "../../../../../Constant";
import CommonHitsAndComments from "./commonHitsAndComments";
interface UserCommentPropsType {
  ImageSrc: string;
  mainDivClassName?: string;
  userReplay?: boolean;
}
const UserComment = ({ImageSrc,mainDivClassName,userReplay,}: UserCommentPropsType) => {
  return (
    <>
      {userReplay ? (
        <LI>
          <UL className="simple-list">
            <LI>
              <div className="d-flex">
                <Image className="align-self-center" src={dynamicImage("blog/9.jpg")} alt="Generic placeholder"/>
                <div className="flex-grow-1">
                  <Row>
                    <Col xl="12">
                      <H6 className="mt-0">
                        {JolioMark}
                        <span> ( Developer )</span>
                      </H6>
                    </Col>
                  </Row>
                  <P>{SingleBlogParagraph}</P>
                </div>
              </div>
            </LI>
          </UL>
        </LI>
      ) : (
        <LI>
          <div className={`d-flex ${mainDivClassName}`}>
            <Image className="align-self-center" src={dynamicImage(`blog/${ImageSrc}`)} alt="Generic placeholder"/>
            <div className="flex-grow-1">
              <Row>
                <Col md="4">
                  <H6 className="mt-0">
                    {JolioMark}
                    <span> ( Designer )</span>
                  </H6>
                </Col>
                <CommonHitsAndComments />
              </Row>
              <P>{SingleBlogParagraph}</P>
            </div>
          </div>
        </LI>
      )}
    </>
  );
};

export default UserComment;
