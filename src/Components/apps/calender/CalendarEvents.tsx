import { Col, Input, Label } from "reactstrap";
import { H4, P } from "../../../AbstractElements";
import { calendarInitialState } from "../../../Data/apps/calender/DragData";
import { DraggableEvents, RemoveAfterDrop } from "../../../Constant";

const CalendarEvents = () => {
  return (
    <Col xxl={3} xl={4} className="box-col-30">
      <div id="external-events" className="calendar-default">
        <H4>{DraggableEvents}</H4>
        <div className="external-events-list">
          {calendarInitialState.events.map((event, index) => (
            <div
              className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event p-md-3 p-2 text-sm mb-3 border-0 ${event.className}`}
              title={event.title}
              key={index}
            >
              <div className="fc-event-main">
                <i className={`me-2 ${event.icon}`}></i>
                {event.title}
              </div>
            </div>
          ))}
        </div>
        <P>
          <Input
            className="checkbox_animated"
            id="drop-remove"
            type="checkbox"
          />
          <Label htmlFor="drop-remove" className="m-0">{RemoveAfterDrop}</Label>
        </P>
      </div>
    </Col>
  );
};

export default CalendarEvents;
