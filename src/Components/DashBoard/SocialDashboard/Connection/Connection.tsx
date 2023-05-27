import { Card, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import ConnectionBody from "./ConnectionBody";
import { ConnectionHeading } from "../../../../Constant";
const Connection = () => {
  return (
    <Card className="card-with-border connection">
      <CardHeader>
        <H5 className="d-inline-block">{ConnectionHeading}</H5>
        <span className="pull-right mt-0">879</span>
      </CardHeader>
      <ConnectionBody />
    </Card>
  );
};

export default Connection;
