import { Card, Col, CardBody, Table } from "reactstrap";
import HeadingWithIcon from "../../Common/HeadingWithIcon";
import PointsBody from "./PointsBody";

const AgentPerformancePoints = () => {
  return (
    <Col xl="6">
      <Card className="card-with-border overall-rating">
        <HeadingWithIcon Tittle="Agent Performance Points" />
        <CardBody className="p-0">
          <div className="table-responsive agent-performance-table theme-scrollbar">
            <Table className="table-bordernone">
              <PointsBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AgentPerformancePoints;
