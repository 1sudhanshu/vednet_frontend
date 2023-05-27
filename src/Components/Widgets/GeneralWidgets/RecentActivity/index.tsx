import { Card, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import RecentActivityBody from "./RecentActivityBody";
import { RecentActivityHeading } from "../../../../Constant";

const RecentActivity = () => {
  return (
    <Col xl="4" lg="12" className=" box-col-12">
      <div>
        <Card>
          <CardHeader>
            <H5 className="text-uppercase">{RecentActivityHeading}</H5>
          </CardHeader>
          <RecentActivityBody />
        </Card>
      </div>
    </Col>
  );
};

export default RecentActivity;
