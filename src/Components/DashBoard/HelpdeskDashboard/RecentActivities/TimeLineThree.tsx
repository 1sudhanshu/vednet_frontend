import { P } from "../../../../AbstractElements";

const TimeLineThree = () => {
  return (
    <div className="d-flex">
      <div className="timeline-dot-success" />
      <div className="flex-grow-1">
        <span className="d-block f-w-600">
          Natalie reassigned ticket
          <span className="pull-right light-font f-w-400">8 hour ago</span>
        </span>
        Francisco, CA
        <P>
          <span className="font-success">Elisse Joson San </span>
        </P>
      </div>
    </div>
  );
};

export default TimeLineThree;
