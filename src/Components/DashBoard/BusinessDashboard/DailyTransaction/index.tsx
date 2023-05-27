import { Card, CardBody, CardHeader, Table } from "reactstrap";
import {Time,InvoiceNo,Name,Status,TodayTransactionDetails,Todaystransaction,Total,} from "../../../../Constant";
import TransactionTableBody from "./TransactionTableBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const DailyTransaction = () => {

  return (
    <div>
      <Card className=" card-with-border total-users-lists">
      <HeadingCommon className="card-no-border" dangerouslySetInnerHTML={Todaystransaction} Heading={TodayTransactionDetails}/>
        <CardBody className="p-0">
          <div className="users-total table-responsive theme-scrollbar">
            <Table className="table table-bordernone">
              <thead>
                <tr>
                  <th>{Name}</th>
                  <th>{InvoiceNo}</th>
                  <th>{Time}</th>
                  <th>{Status}</th>
                  <th>{Total}</th>
                </tr>
              </thead>
              <TransactionTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DailyTransaction;
