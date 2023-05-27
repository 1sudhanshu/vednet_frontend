import { CardBody } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { calenderDescription, calenderHead } from "../../../../Constant";

const CalDescription = () => {
  return (
    <CardBody className="cal-desc text-center card-body">
      <H6 className="f-w-600">{calenderHead}</H6>
      <P className="text-muted mt-3 mb-0 custom-scrollbar">{calenderDescription}</P>
    </CardBody>
  );
};

export default CalDescription;