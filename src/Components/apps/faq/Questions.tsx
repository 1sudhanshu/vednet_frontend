import { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { H5, H6 } from "../../../AbstractElements";
import { QuickQuestions } from "../../../Constant";
import AccordionCard from "./AccordionCard";
import { faqQuestionsData } from "../../../Data/apps/Faq";
import FaqRightsidebae from "./FaqRightside";

const Questions = () => {
  return (
    <Fragment>
      <Col lg="12">
        <div className="header-faq">
          <H5 className="mb-0">{QuickQuestions}</H5>
        </div>
        <Row className="default-according style-1 faq-accordion">
          <Col xl="8 xl-60" lg="6" md="7" className="box-col-60">
            {faqQuestionsData.map((item, i) => (
              <Fragment key={i}>
                {item.subTitle && (
                  <div className="faq-title">
                    <H6>{item.subTitle}</H6>
                  </div>
                )}
                {faqQuestionsData[i].titles.map((item, id) => (
                  <AccordionCard key={id} item={item} />
                ))}
              </Fragment>
            ))}
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col>
    </Fragment>
  );
};
export default Questions;
