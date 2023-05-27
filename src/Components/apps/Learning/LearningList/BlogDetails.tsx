import { H6, LI, UL } from "../../../../AbstractElements";
import { BlogBy, BlogHeading, Hits } from "../../../../Constant";

const BlogDetails = () => {
  return (
    <div className="blog-details-main">
      <UL className="blog-social flex-row simple-list">
        <LI className="digits">9 April 2023</LI>
        <LI className="digits">{BlogBy}Admin</LI>
        <LI className="digits">0 {Hits}</LI>
      </UL>
      <hr />
      <H6 className="blog-bottom-details">{BlogHeading}</H6>
    </div>
  );
};

export default BlogDetails;
