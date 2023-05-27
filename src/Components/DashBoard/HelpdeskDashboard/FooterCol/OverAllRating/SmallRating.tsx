import { Col } from "reactstrap";
import { H6, LI, UL } from "../../../../../AbstractElements";
import { OverAllRatingdatas } from "../../../../../Data/Components/HelpdeskDashBoard/OverAllRating";

const SmallRating = () => {
  return (
    <Col sm="6" className="p-0">
      <UL className="small-rating simple-list">
        {OverAllRatingdatas.map((data, index) => (
          <LI key={index}>
            <H6>
              {data.rating}
              <span className="stars-small ps-2">
                <span className={data.spanClass} />
                <span className={data.spanClass} />
                <span className={data.spanClass} />
                <span className={data.fourSpanClass} />
                <span className={data.fiveSpanClass} />
              </span>
              <span className="f-12 pull-right">{data.percatntage}</span>
            </H6>
          </LI>
        ))}
      </UL>
    </Col>
  );
};

export default SmallRating;
