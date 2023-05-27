import { Card, CardHeader, CardBody, Table } from "reactstrap";
import HeadingWithButton from "../Common/HeadingWithButton";
import TransactionHistoryTbody from "./TransactionHistoryTbody";

const TransactionHistory = () => {
  return (
    <Card className=" card-with-border">
      <CardHeader className=" card-no-border tickets">
        <HeadingWithButton tittle="Transaction History" />
      </CardHeader>
      <CardBody className="p-0">
        <div className="transaction-table table-responsive agent-performance-table theme-scrollbar">
          <Table className="table table-bordernone">
            <TransactionHistoryTbody />
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default TransactionHistory;
