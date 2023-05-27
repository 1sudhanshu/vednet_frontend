import { Card, Col } from "reactstrap";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import {Hits,MarkJecno,SearchDesc,SearchImageTime,} from "../../../../Constant";

const SearchBanner = () => {
  return (
    <Col xl="6" className="box-col-6 search-banner">
      <Card className="lg-mt mb-0">
        <div className="blog-box blog-shadow">
          <Image
            className="img-fluid"
            src={dynamicImage("blog/blog.jpg")}
            alt="blog"
          />
          <div className="blog-details">
            <P className="digits">{SearchImageTime}</P>
            <H4>{SearchDesc}</H4>
            <UL className="simple-list blog-social digits d-flex flex-row">
              <LI className="bg-transparent">
                <i className="icofont icofont-user"></i>
                {MarkJecno}
              </LI>
              <LI className="bg-transparent">
                <i className="icofont icofont-thumbs-up"></i>
                {Hits}
              </LI>
            </UL>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default SearchBanner;
