import { P } from "../../../../AbstractElements";
import { timeLineContent } from "../../../../Constant";
import CommentBox from "./CommentBox";
import LikeContent from "./LikeContent";

const TimelineContent = () => {
  return (
    <div className="timeline-content">
      <P>{timeLineContent}</P>
      <LikeContent/>
      <CommentBox />
    </div>
  );
};

export default TimelineContent;
