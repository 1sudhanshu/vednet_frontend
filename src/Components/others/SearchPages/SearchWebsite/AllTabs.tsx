import  {  useEffect, useState } from "react";
import { AllAbout, Href } from "../../../../Constant";
import { Col, Row } from "reactstrap";
import { H6, LI, P, UL } from "../../../../AbstractElements";
import { Rating } from "react-simple-star-rating";
import PagesSort from "./Pages";
import axios from "axios";
import SearchBanner from "./SearchBanner";
import { searchData } from "./SearchWebsiteType";

const AllTabs = () => {
  const [tabsData, setTabsData] = useState<[] | searchData[]>([]);
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
        setTabsData(resp.data);
      });
  }, []);

  return (
      <div className="search-links tab-pane fade show active">
        <Row>
          <Col xl="6 box-col-6">
            <P className="pb-4">{AllAbout}</P>
            {tabsData.map((item, i) => (
                <div className="info-block" key={i}>
                  <H6>{item.title}</H6>
                  <a href={Href}>{item.url}</a>
                  <P>{item.detail}</P>
                  <div className="star-ratings">
                    <UL className="simple-list search-info d-flex flex-row">
                      <LI>
                        <Rating initialValue={Math.random() * 5} size={15} fillColor="#E56809"/>
                      </LI>
                      <LI>{item.star}</LI>
                      <LI>{item.vote}</LI>
                      <LI>{item.news}</LI>
                    </UL>
                  </div>
                </div>
              ))}
            <PagesSort />
          </Col>
          <SearchBanner />
        </Row>
      </div>
  );
};
export default AllTabs;
