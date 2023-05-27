import { Col } from "reactstrap";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import {Comment, Comments,DetailedCourseHeading,DetailedCourseParagraph1,DetailedCourseParagraph2,Hits,} from "../../../../Constant";
import UserComment from "../../Blog/SingleBlog/common/UserComment";

const BlogSingle = () => {
  return (
    <Col xl="9" className="xl-60">
      <div className="blog-single">
        <div className="blog-box blog-details">
          <Image
            className="img-fluid w-100"
            src={dynamicImage("faq/learning-1.png")}
            alt="blog-main"
          />
          <div className="blog-details">
            <UL className=" blog-social simple-list d-block">
              <LI className="digits">25 July 2023</LI>
              <LI><i className="icofont icofont-user" />Mark <span>Jecno </span></LI>
              <LI className="digits"><i className="icofont icofont-thumbs-up" />02 <span>{Hits}</span></LI>
              <LI className="digits"><i className="icofont icofont-ui-chat" />{Comments}</LI>
            </UL>
            <H4>{DetailedCourseHeading}</H4>
            <div className="single-blog-content-top">
              <P>{DetailedCourseParagraph1}</P>
              <P>{DetailedCourseParagraph2}</P>
            </div>
          </div>
        </div>
        <section className="comment-box">
          <H4>{Comment}</H4>
          <hr />
          <UL className="simple-list">
            <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center"/>
            <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center" userReplay={true}/>
            <UserComment ImageSrc="4.jpg" />
          </UL>
        </section>
      </div>
    </Col>
  );
};

export default BlogSingle;
