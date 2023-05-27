import { Col } from "reactstrap";
import { LI, UL } from "../../../../../AbstractElements";
import { Comments, Hits } from "../../../../../Constant";

const CommonHitsAndComments = () => {
  return (
    <Col md="8">
      <UL className="comment-social float-start float-md-end simple-list d-block">
        <LI className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 {Hits}
        </LI>
        <LI className="digits">
          <i className="icofont icofont-ui-chat" />
           {Comments}
        </LI>
      </UL>
    </Col>
  );
};

export default CommonHitsAndComments;
