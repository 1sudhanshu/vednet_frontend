import { Fragment } from "react";
import { orderHistoryTableData } from "../../../../../Data/apps/ecommerce/orderHistory";
import OrderHistoryTittleRow from "./OrderHistoryTittleRow";
import OrderHistoryDataRow from "./OrderHistoryDataRow";
import OrderHistoryTableHead from "./OrderHistoryTableHead";

const OrderHistoryTable = () => {
  return (
    <div className="order-history table-responsive">
      <table className="table table-bordernone">
        <OrderHistoryTableHead/>
        <tbody>
          {orderHistoryTableData.map((data, index) => (
            <Fragment key={index}>
              {data.heading ? (
                <OrderHistoryTittleRow data={data} />
              ) : (
                <OrderHistoryDataRow data={data} />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryTable;
