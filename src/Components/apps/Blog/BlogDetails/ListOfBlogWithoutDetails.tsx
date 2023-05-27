import { H6, LI, UL } from "../../../../AbstractElements";
import { BlogBy,  Hits } from "../../../../Constant";

const ListOfBlogWithoutDetails = () => {
  return (
    <div className="blog-details-main">
      <UL className="blog-social flex-row simple-list">
        <LI className="digits">9 April 2023</LI>
        <LI className="digits">{BlogBy} Admin</LI>
        <LI className="digits">0 {Hits}</LI>
      </UL>
      <hr />
      <H6 className="blog-bottom-details">People just don't do it anymore. We have to change that. Sometimes the simplest things are the most profound.</H6>
    </div>
  );
};

export default ListOfBlogWithoutDetails;
