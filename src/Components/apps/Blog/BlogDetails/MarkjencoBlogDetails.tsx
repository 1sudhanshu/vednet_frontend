import { H4, LI, P, UL } from "../../../../AbstractElements";
import { Comments, Hits, MarkJecno, MarkJecnoBlog } from "../../../../Constant";

const MarkjencoBlogDetails = () => {
  return (
    <div className="blog-details">
      <P className="digits">25 July 2023</P>
      <H4>{MarkJecnoBlog}</H4>
      <UL className="blog-social flex-row simple-list d-block">
        <LI>
          <i className="icofont icofont-user" />
          {MarkJecno}
        </LI>
        <LI className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 {Hits}
        </LI>
        <LI className="digits">
          <i className="icofont icofont-ui-chat" />
          {Comments}
        </LI>
      </UL>
    </div>
  );
};

export default MarkjencoBlogDetails;
