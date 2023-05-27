import { H5, H6, LI, UL } from "../../../AbstractElements";
import { Archive, FileText, ArrowRight } from "react-feather";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import { Href, knowledgearticl, BrowseArticles } from "../../../Constant";
import { KnowledegesBaseData } from "../../../Data/apps/KnowledegesBase";

const CategoryData = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <H5 className="mb-0">{knowledgearticl}</H5>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H5>{BrowseArticles}</H5>
            </CardHeader>
            <CardBody>
              <Row className="browse">
                {KnowledegesBaseData.map((data) => (
                  <Col xl="4" md="6" key={data.id}>
                    <div className="browse-articles browse-bottom">
                      <H6>
                        {" "}
                        <span>
                          <Archive />
                        </span>{" "}
                        {data.title}
                      </H6>
                      <UL className="simple-list">
                        {data.Knowledegeslist &&
                          data.Knowledegeslist.map((data, index2) => (
                            <LI key={index2}>
                              <a href={Href}>
                                {data.fileTextIcon ? (
                                  <span>
                                    <FileText />
                                  </span>
                                ) : (
                                  <span>
                                    <ArrowRight />
                                  </span>
                                )}
                                <span>{data.text}</span>
                                {data.badge ? (
                                  <span className="badge badge-primary pull-right">
                                    {data.badge}
                                  </span>
                                ) : (
                                  " "
                                )}
                              </a>
                            </LI>
                          ))}
                      </UL>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default CategoryData;
