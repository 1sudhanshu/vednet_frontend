import { P } from "../../../../AbstractElements";

const TimeLineOne = () => {
  return (
    <div className="d-flex">
      <div className="timeline-line" />
      <div className="timeline-dot-danger" />
      <div className="flex-grow-1">
        <span className="d-block f-w-600">
          Natalie reassigned ticket
          <span className="pull-right light-font f-w-400">2 hour ago</span>
        </span>
        <P>
          <span className="font-danger">Elisse Joson San </span>
          Francisco, CA
        </P>
      </div>
    </div>
  );
};

export default TimeLineOne;
