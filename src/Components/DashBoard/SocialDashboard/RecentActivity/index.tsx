import { Card, Col, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { RecentActivityHeading } from "../../../../Constant";
import RecentActivityBody from "./RecentActivityBody";

const RecentActivity = () => {
  return (
    <Col xl="3" className="xl-50 box-col-6">
      <Card className="card-with-border">
        <CardHeader>
          <H5 className="d-inline-block">{RecentActivityHeading}</H5>
          <span className="setting-round pull-right d-inline-block mt-0">
            <i className="fa fa-spin fa-cog" />
          </span>
        </CardHeader>
        <RecentActivityBody />
      </Card>
    </Col>
  );
};

export default RecentActivity;
