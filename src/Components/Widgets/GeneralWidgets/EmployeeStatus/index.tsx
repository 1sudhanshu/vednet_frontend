import { Card, Col, CardHeader, CardBody, Table } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import EmployeeStatusBody from "./EmployeeStatusBody";
import { Designation, Experience, Name, SkillLevel, employeeStatus } from "../../../../Constant";

const EmployeeStatus = () => {
  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card>
        <CardHeader>
          <H5>{employeeStatus}</H5>
        </CardHeader>
        <CardBody>
          <div className="user-status table-responsive theme-scrollbar">
            <Table className=" table-bordernone">
              <thead>
                <tr>
                  <th scope="col">{Name}</th>
                  <th scope="col">{Designation}</th>
                  <th scope="col">{SkillLevel}</th>
                  <th scope="col">{Experience}</th>
                </tr>
              </thead>
              <EmployeeStatusBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeStatus;
