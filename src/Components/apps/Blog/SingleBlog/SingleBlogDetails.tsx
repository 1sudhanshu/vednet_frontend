import { H4, LI, P, UL } from "../../../../AbstractElements";
import { Comments, Hits, Jecno, Mark, SingleBlogHeading, SingleBlogParagraph1, SingleBlogParagraph2 } from "../../../../Constant";

const SingleBlogDetails = () => {
  return (
    <div className="blog-details">
      <UL className="blog-social flex-row simple-list d-block">
        <LI>25 July 2023</LI>
        <LI><i className="icofont icofont-user" />{Mark} <span>{Jecno} </span></LI>
        <LI className="digits"><i className="icofont icofont-thumbs-up" /> 02<span>{Hits}</span></LI>
        <LI className="digits"><i className="icofont icofont-ui-chat" /> {Comments}</LI>
      </UL>
      <H4>{SingleBlogHeading}</H4>
      <div className="single-blog-content-top">
        <P>{SingleBlogParagraph1}</P>
        <P>{SingleBlogParagraph2}</P>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
