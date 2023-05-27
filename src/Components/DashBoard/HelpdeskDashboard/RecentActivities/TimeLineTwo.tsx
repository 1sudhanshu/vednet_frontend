import { P } from "../../../../AbstractElements";

const TimeLineTwo = () => {
  return (
    <div className="d-flex">
      <div className="timeline-dot-secondary" />
      <div className="flex-grow-1">
        <span className="d-block f-w-600">
          Katherine submitted new ticket
          <span className="pull-right light-font f-w-400">5 hour ago</span>
        </span>
        <P>
          <span className="font-secondary">Elisse Joson San </span>
          Francisco, CA
        </P>
        <P className="f-12 mb-0">
        The new created ticket will appear in the tickets tab with email.....
        </P>
      </div>
    </div>
  );
};

export default TimeLineTwo;
