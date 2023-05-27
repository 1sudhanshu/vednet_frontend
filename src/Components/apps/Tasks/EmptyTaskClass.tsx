import { Printer } from "react-feather";
import { Card, CardBody, CardHeader } from "reactstrap";
import { H6 } from "../../../AbstractElements";
import { Href, NoTaskDueToday, Print } from "../../../Constant";
interface propsType {
  title: string;
}
const EmptyTaskClass = ({ title }: propsType) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H6 className="mb-0">{title}</H6>
        <a href={Href}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <CardBody>
        <div className="details-bookmark text-center">
          <div className="no-favourite">
            <span>{NoTaskDueToday}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default EmptyTaskClass;
