import { Card, CardHeader, Col } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import {AddprojectAndUpload,Date,Price,ProjectName,Status,} from "../../../../Constant";
import AddProjectsAndUploadTableBody from "./AddProjectsAndUploadTableBody";

const AddProjectsAndUpload = () => {
  return (
    <Col md="12">
      <Card>
        <CardHeader>
          <H4 className="card-title mb-0">{AddprojectAndUpload}</H4>
        </CardHeader>
        <div className="table-responsive">
          <table className="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>{ProjectName}</th>
                <th>{Date}</th>
                <th>{Status}</th>
                <th>{Price}</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;
