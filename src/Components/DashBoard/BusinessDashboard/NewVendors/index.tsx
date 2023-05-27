import { Card, CardBody,Table } from "reactstrap";
import {Country,Date,Name,NumberofTotallyUsers,Payment,Total,TotalNewVenders,} from "../../../../Constant";
import VendorsTBody from "./VendorsTBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const NewVendors = () => {
  return (
    <Card className="card-with-border total-users-lists">
      <HeadingCommon className="card-no-border" dangerouslySetInnerHTML={NumberofTotallyUsers} Heading={TotalNewVenders}/>
      <CardBody className="p-0">
        <div className="users-total table-responsive theme-scrollbar">
          <Table className="table table-bordernone">
            <thead>
              <tr>
                <th>{Name}</th>
                <th>{Country}</th>
                <th>{Date}</th>
                <th>{Payment}</th>
                <th>{Total}</th>
              </tr>
            </thead>
            <VendorsTBody />
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default NewVendors;
